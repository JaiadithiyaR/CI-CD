# DeployFlow – Automated Blue-Green CI/CD Pipeline on AWS using Jenkins, Docker & Nginx

DeployFlow is a production-inspired CI/CD pipeline that automates application deployment using the Blue-Green Deployment strategy. The project integrates Jenkins, Docker, Docker Compose, GitHub Webhooks, Docker Hub, Nginx Reverse Proxy, and AWS EC2 to achieve automated deployments with minimal downtime. The pipeline builds and publishes Docker images, deploys the inactive environment, performs health checks, switches traffic seamlessly, and verifies successful deployment.

---

## Features

- Automated CI/CD pipeline using Jenkins
- GitHub Webhook integration for automatic pipeline triggering
- Automated Docker image build and deployment
- Docker Hub image publishing
- Blue-Green deployment strategy
- Zero-downtime application deployment
- Automated health checks before production switch
- Dynamic traffic switching using Nginx Reverse Proxy
- Deployment on AWS EC2
- Easy rollback by switching traffic to the previous environment
- Production-inspired deployment workflow

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Cloud Platform | AWS EC2 |
| CI/CD | Jenkins |
| Version Control | Git, GitHub |
| Containerization | Docker |
| Container Orchestration | Docker Compose |
| Image Registry | Docker Hub |
| Reverse Proxy | Nginx |
| Frontend | React |
| Backend | Node.js, Express.js |
| Operating System | Ubuntu Server |
| Scripting | Bash |

---

# System Architecture

```
                     GitHub Repository
                            │
                     GitHub Webhook
                            │
                            ▼
                     Jenkins Pipeline
                            │
          ┌─────────────────┴─────────────────┐
          │                                   │
          ▼                                   ▼
 Build Docker Images               Push Images to Docker Hub
          │
          ▼
 Detect Active Environment
          │
          ▼
 Deploy to Inactive Environment
          │
          ▼
     Health Check
          │
          ▼
 Switch Traffic (Nginx)
          │
          ▼
 Verify Deployment
          │
          ▼
         Users
```

---

# Blue-Green Deployment Workflow

### Step 1 – Current Production

```
Users
   │
   ▼
 Nginx
   │
   ▼
Green Environment
```

### Step 2 – Deploy New Version

```
Users

Green Environment (Live)

Blue Environment (Deploying)
```

### Step 3 – Health Check

```
Health Check

Blue Environment

Healthy?
     │
     ├── Yes
     ▼
Switch Traffic

     └── No
          ▼
Keep Green Live
```

### Step 4 – Switch Traffic

```
Users
   │
   ▼
 Nginx
   │
   ▼
Blue Environment
```

The previous environment remains available until the new deployment is verified, ensuring minimal downtime and safer releases.

---

# Project Structure

```
CI-CD/
│
├── backend/
│
├── frontend/
│
├── proxy/
│   └── active_backend.conf
│
├── Jenkinsfile
│
├── docker-compose.yml
├── docker-compose.blue.yml
├── docker-compose.green.yml
│
├── detect-active.sh
├── deploy-blue.sh
├── deploy-green.sh
├── switch.sh
│
└── README.md
```

---

# CI/CD Pipeline Workflow

The Jenkins pipeline performs the following stages automatically whenever new code is pushed to GitHub.

1. Clone the latest source code from GitHub
2. Build frontend and backend Docker images
3. Push Docker images to Docker Hub
4. Detect the currently active environment
5. Deploy the latest version to the inactive environment
6. Wait until the deployed application becomes healthy
7. Switch Nginx traffic to the newly deployed environment
8. Verify successful deployment

---

# AWS Deployment

The application is deployed on an Ubuntu-based AWS EC2 instance where Jenkins manages the complete CI/CD workflow.

The deployment process includes:

- GitHub Webhook triggers Jenkins automatically
- Jenkins builds Docker images
- Images are pushed to Docker Hub
- Jenkins detects the currently active environment
- The inactive environment is deployed
- Health checks validate the deployment
- Nginx switches traffic to the healthy environment
- Deployment verification completes the pipeline

### AWS Environment

- Cloud Platform : AWS EC2
- Operating System : Ubuntu Server
- CI/CD Tool : Jenkins
- Containerization : Docker
- Orchestration : Docker Compose
- Reverse Proxy : Nginx
- Image Registry : Docker Hub
- Deployment Strategy : Blue-Green Deployment

---

# Getting Started

## Clone Repository

```bash
git clone https://github.com/JaiadithiyaR/CI-CD.git

cd CI-CD
```

---

## Create Docker Network

```bash
docker network create deployflow-network
```

---

## Build Docker Images

```bash
docker compose build
```

---

## Start Jenkins

Open Jenkins in your browser.

```
http://<EC2-PUBLIC-IP>:8080
```

Configure:

- GitHub Repository
- Docker Hub Credentials
- GitHub Webhook

---

## Trigger Deployment

Push code to GitHub.

```bash
git add .

git commit -m "Updated application"

git push origin main
```

The Jenkins pipeline automatically:

- Builds Docker images
- Pushes images to Docker Hub
- Deploys the inactive environment
- Performs health checks
- Switches production traffic
- Verifies deployment

---

# Docker Hub Images

The pipeline automatically publishes:

- deployflow-backend
- deployflow-frontend

---

# Deployment Scripts

| Script | Purpose |
|---------|---------|
| detect-active.sh | Detects the currently active environment |
| deploy-blue.sh | Deploys the Blue environment |
| deploy-green.sh | Deploys the Green environment |
| switch.sh | Switches Nginx traffic between Blue and Green |

---

# Pipeline Benefits

- Continuous Integration
- Continuous Delivery
- Automated Build Process
- Automated Deployment
- Blue-Green Deployment
- Near Zero Downtime
- Automated Health Checks
- Faster Release Cycle
- Easier Rollback
- Production-Ready Deployment Workflow

---

# Screenshots

Add screenshots of:

- Jenkins Dashboard
- Successful Jenkins Pipeline
- Docker Containers
- Docker Hub Repository
- AWS EC2 Instance
- GitHub Webhook
- Blue-Green Deployment
- Running Application
- Nginx Reverse Proxy

---

# Future Enhancements

- Automatic Rollback on Failed Health Check
- Kubernetes Deployment
- AWS ECS Deployment
- Prometheus Monitoring
- Grafana Dashboard
- HTTPS using Let's Encrypt
- Terraform Infrastructure as Code
- GitHub Actions Pipeline
- Multi-Environment Deployment (Development, Staging, Production)

---

# Author

**Jai Adithiya R**

B.E. Computer Science and Engineering

Interested in DevOps, Cloud Computing, AWS, CI/CD, Docker, Kubernetes, and Full Stack Development.

---

# License

This project is licensed for educational and portfolio purposes.