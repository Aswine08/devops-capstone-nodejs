# DevOps Capstone Project – Node.js Application 🚀

## 📌 Project Overview
This project demonstrates an end-to-end DevOps workflow using a simple Node.js web application.  
The application is containerized using Docker and deployed on an AWS EC2 instance.

---

## 🛠️ Tools & Technologies Used
- Node.js
- Docker
- Docker Hub
- GitHub
- GitHub Actions (CI)
- AWS EC2 (Ubuntu)

---

## 🏗️ Project Architecture
1. Node.js application is developed locally
2. Source code is pushed to GitHub
3. Docker image is built using Dockerfile
4. Docker image is pushed to Docker Hub
5. Application is deployed on AWS EC2 using Docker
6. App is accessed via public IP and port

---

## 🐳 Docker Image
Docker Hub Repository:  
👉 https://hub.docker.com/r/aswineraja08/devops-node-app

Pull the image using:
```bash
docker pull aswineraja08/devops-node-app:latest
