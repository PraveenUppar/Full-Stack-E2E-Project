# Full-Stack Application with CI/CD, Docker & Kubernetes

This repository serves as a comprehensive blueprint for modern, cloud-native application development. It showcases an end-to-end DevOps workflow for a full-stack application, integrating automated CI/CD, robust security scanning, and container orchestration with Docker and Kubernetes.

## Features

-   **Full-Stack Architecture:**
-   **Containerized Environment:** Fully containerized with Docker and orchestrated using Docker Compose for easy local setup.
-   **Automated CI/CD Pipelines:** Robust CI/CD workflows built with both **Jenkins** and **GitHub Actions** to automate testing, security scanning, and image publishing.
-   **Kubernetes Ready:** Configured for deployment on a local Kubernetes cluster (e.g., Minikube, Kind).
-   **Security:** Integrated security scanning for secrets (`gitleaks`), filesystem (`fs-scan`), and container images (`Trivy`).
-   **Code Quality Assurance:** Automated static code analysis and quality gate checks using **SonarQube**.

---

## Tech Stack

| Category      | Technology                                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Backend** | ![NodeJS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)                           |
| **DevOps** | ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white) ![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) |

---

## Project Status

This project has been built in phases, covering development, integration, and a full DevOps lifecycle.

-   [x] **Phase 1: Backend Development** (Node.js, Express, MongoDB)
-   [x] **Phase 2: Frontend Development** (React, Tailwind CSS)
-   [x] **Phase 3: Integration** (Connecting Frontend & Backend)
-   [x] **Phase 4: CI/CD Pipeline Implementation**
    -   [x] Jenkins Pipeline
    -   [x] GitHub Actions Workflow
-   [x] **Phase 5: Containerization with Docker**
    -   [x] Dockerfile for Frontend & Backend
    -   [x] CI Pipeline Docker Integration (Build, Scan, Push)
    -   [x] Docker Compose for local multi-container setup
-   [x] **Phase 6: Orchestration with Kubernetes**
    -   [x] Setup and run on a local Kubernetes cluster
