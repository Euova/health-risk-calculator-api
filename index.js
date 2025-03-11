const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080; // Azure expects 8080

app.use(express.json());

var corsOptions = {
  origin: [
    "https://zealous-dune-0207a2410.6.azurestaticapps.net",
    "http://127.0.0.1:5500",
  ],
  optionSuccessStatus: 200,
};

app.post("/", cors(corsOptions), (req, res, next) => {
  const formData = req.body;

  let totalPoints = 0;

  totalPoints += calcPtsFromAge(formData.age);
  totalPoints += calcPtsFromBMI(formData.height, formData.weight);
  totalPoints += calcPtsFromBP(formData.bloodPressure);
  totalPoints += calcPtsFromFD(formData.familyDisease);

  const riskCategory = calcRisk(totalPoints);

  res.json({
    bmi: calcBMI(formData.height, formData.weight).toFixed(2),
    riskScore: totalPoints,
    riskCategory: riskCategory,
  });
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});

function calcPtsFromAge(age) {
  if (age === 1) return 0; // age < 30
  else if (age === 2) return 10; // age < 45
  else if (age === 3) return 20; // age < 60
  else if (age === 4) return 30; // age >= 60
}

// height in meters
function calcBMI(height, weight) {
  return weight / Math.pow(height, 2);
}

function calcPtsFromBMI(height, weight) {
  const bmi = calcBMI(height, weight);

  if (bmi >= 18.5 && bmi <= 24.9) return 0;
  else if (bmi >= 25.0 && bmi <= 29.9) return 30;
  else return 75;
}

function calcPtsFromBP(bloodPressure) {
  if (bloodPressure === 1) return 0; // normal
  else if (bloodPressure === 2) return 15; // elevated
  else if (bloodPressure === 3) return 30; // stage 1
  else if (bloodPressure === 4) return 75; // stage 2
  else if (bloodPressure === 5) return 100; // crisis
}

function calcPtsFromFD(familyDisease) {
  let pts = 0;

  Object.values(familyDisease).forEach((disease) => {
    if (disease === 1) pts += 10; // Since all diseases have the same number of points
  });

  return pts;
}

function calcRisk(points) {
  if (points <= 20) return "Low Risk";
  else if (points <= 50) return "Moderate Risk";
  else if (points <= 75) return "High Risk";
  else return "Uninsurable";
}
