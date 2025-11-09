# Employee Management System
A simple full-stack application for managing employee CRUD (Create, Read, Update, Delete) operations. Applying my experience and I learned from the tutorial.
<br/>

## 📚 Stack

This is a **Java Full-Stack Web Application** using:
- **Frontend:** React.js + Vite + Bootstrap
- **Backend:** Spring Boot + Spring Data JPA
- **Database:** PostgreSQL
- **Build Tools:** Maven (Backend), Vite (Frontend)

<div align="center">
  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)

</div>

## Features
- Add new employees
- View all employees in table
- Delete employee record
- Form validation

## Setup
### Clone Repository
```bash
git clone https://github.com/ffXder/Employee-Management-System.git
cd Employee-Management-System
```

### Database Setup
```sql
CREATE DATABASE employees_db;
```
### Backend Setup
Navigate the folder to `applications.properties`
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/employee_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Run Backend
```bash
cd ems-backend
mvn clean install
mvn spring-boot:run
```
Runs on `http://localhost:8080`

### Run Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:3000`


## 📖Credits
This project was built following tutorial by [Java Guide](https://www.youtube.com/@JavaGuides/featured).
- [ReactJS + Spring Boot Full-Stack Course](https://www.youtube.com/playlist?list=PLGRDMO4rOGcODJeYSY08lIILkqoydQI2k)

## 🧑‍💻Author
**ffXder**
- GitHub: [ffXder](https://github.com/ffXder)
