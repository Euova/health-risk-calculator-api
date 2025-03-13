# Health Risk Calculator - RESTful API
### Name: Eyad Nasr
### AUS Email: b00095634@aus.edu
--- 
### Name: Ali Alnewaissr 
### AUS Email: b00093556@aus.edu
---
### Name: Abderrahmane Kasdi 
### AUS Email: b00075887@aus.edu
---
### Name: Wajeeh Dalbah 
### AUS Email: b00093532@aus.edu
---
## Instructions:
#### Call the remote RESTful API by using this url 'https://health-risk-calculator-api-emdnh4b8gsgkg9bs.uaenorth-01.azurewebsites.net/' with the following inputs: 
### Inputs - Request Body
1. ***Age Group (1-4)***
    1. *18-29 years*
    2. *30-44 years*
    3. *45-59 years*
    4. *60+ years*
2. ***Height (meters)***
3. ***Weight (kg)***
4. ***Blood Pressure Group (1-5)***
    1. *Normal: Systolic less than 120 mmHg and Diastolic less than 80 mmHg*
    2. *Elevated: Systolic between 120-129 mmHg and Diastolic less than 80 mmHg*
    3. *High Blood Pressure (Hypertension) Stage 1: Systolic between 130-139 mmHg or Diastolic between 80-89 mmHg*
    4. *High Blood Pressure (Hypertension) Stage 2: Systolic 140 mmHg or higher or Diastolic 90 mmHg or higher*
    5. *Hypertensive Crisis: Systolic 180 mmHg or higher and/or Diastolic 120 mmHg or higher (requires immediate medical attention)*
6. ***Family Disease (JS Object with a value of 0 or 1 for the keys: diabetes, cancer, alzheimer. 0 indicates the patient does not have the disease while 1 indicates the patient has the family disease)***.
    - *diabetes: 0/1*
    - *cancer: 0/1*
    - *alzheimer: 0/1*

### Output - Response Body
A JSON object is returned which contains the patient's calculated results which are the following keys: bmi, riskScore, riskCategory. 
```javascript
{ 
 bmi: number,
 riskScore: number,
 riskCategory: string
}
```
##### All content is original
