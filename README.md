# QuestAce - Online Examination Portal

## Project Summary

**QuestAce** is a full-stack web-based platform designed to help institutions such as colleges, schools, companies, and coaching centers conduct **secure online examinations**. This system emphasizes **fairness, monitoring, and authentication** to ensure genuine participation.

---

## Objective

QuestAce enables examiners to securely conduct tests with real-time monitoring, unique exam codes, camera & microphone validations, facial recognition, and tab usage restrictions. It supports both quick exams via code and formal registrations with customizable requirements.

---

## Processing Phase

This project is currently **in development**, built using **standard, secure, and modern technologies**. Our goal is to provide a robust system that prevents cheating and ensures integrity in online exams.

---

## Tools and Technologies

- **Backend**: Spring Boot  
- **Frontend**: React.js, Tailwind CSS  
- **Database**: MongoDB (localhost or Atlas)  
- **Authentication**: JWT, Face Recognition  
- **Proctoring**: Webcam monitoring, Screenshot capturing, Microphone access  

---

## Key Features

### Examiner Side

1. **Exam Conduction via Unique Code**
   - Examiner shares a 6/8/10-digit exam code + 5-digit company/institution ID.
   - No form filling required, only code-based exam initiation.
   - Exams start based on scheduled time by Examiner.

2. **Exam Conduction via Registration Form**
   - Examiner sets required fields (e.g., name, email, work experience, etc.).
   - Students register with company code + exam code.
   - Dynamic forms with optional validations.

### Student Side

- Exam participation via:
  - Direct exam code + company ID.
  - Registration form link.
- Email, name, and system verification required.
- Mandatory camera activation for full duration.
- Face scan comparison with registered image.
- Tab restriction, screenshot logging, extension blocker.
- Result history & exam attempt history.

### Proctoring & Monitoring

- Live camera verification with face detection.
- Periodic auto-screenshot during exam.
- Microphone access monitoring (if enabled).
- Violation detection (face mismatch, tab switch) leads to warnings or auto-cancellation.

### Result & Analytics

- Examiner gets access to results via:
  - Score-wise report.
  - Rank-wise distribution.
  - Category-wise analytics.
- Downloadable reports (PDF/CSV).
- History of conducted exams.

### Exam Management

- Student dashboard showing upcoming exams.
- Examiner dashboard showing created exams.
- Time-based exam access restriction.
- Question shuffling & variation auto-generation.

---

## Security & Verification Ideas

- Verify student identity using face recognition + credentials.
- Registration image vs live camera image comparison.
- Verify company/examiner via external API (if applicable).
- Email OTP and phone verification (optional).

---

## Status

Project is **under development**. Contributions, ideas, and feedback are welcome!