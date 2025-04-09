# 🚀 CI/CD Pipeline with GitHub Actions, Docker & AWS

## **📜 Description**

This project demonstrates how to build a complete CI/CD pipeline using GitHub Actions, Docker, and AWS. It automates the deployment of a full-stack application with a React.js frontend and Node.js backend. The backend is hosted on AWS EC2, and the frontend is deployed to AWS S3 + CloudFront.

Additionally, it includes automatic rollback using AWS EventBridge in case of deployment failure—ensuring high availability and resilience. (In future updates)

⸻

✨ **Features**

- ⚙️ Automated CI/CD pipeline using GitHub Actions.
- 🐳 Dockerized frontend (React.js) and backend (Node.js) for consistency across environments.
- 🚀 Seamless deployment to AWS EC2 (backend) and S3 + CloudFront (frontend).
- 🔁 Auto rollback setup with AWS EventBridge for safer deployments. (In future updates)
- 🌩️ Efficient build, push, and deploy workflow triggered on push event.
- 🔐 Secure and cost-optimized setup using IAM roles and SSM for secrets management.

⸻

🔧 🛠️ **Tech Stack - Dependencies**

- 🛠️ GitHub Actions – CI/CD pipeline orchestrator.
- 🐳 Docker – Containerization of frontend & backend apps.
- 🖥️ AWS EC2 – Backend app hosting.
- 📦 AWS S3 – Frontend static file hosting.
- 🌐 AWS CloudFront – CDN for global delivery of frontend assets.
- 📡 AWS EventBridge – Monitors deployments and triggers rollback if needed. (In future updates)

⸻

🚀 ⚡ **How to Use**

- 📥 Clone the repository
- 🧭 Navigate to the project directory and explore:
    - frontend/ – React.js app
    - backend/ – Node.js app
    - .github/workflows/ – GitHub Actions CI/CD pipeline configs
- 🐳 Dockerize your apps (Dockerfiles already included)
- 🔧 Configure AWS IAM roles and SSM for secret management
- 🚀 Push to GitHub – The pipeline triggers automatically!
- 🛠️ Monitor logs via GitHub Actions and validate deployment on EC2 & S3

⸻

🚦 🔥 **Contributing**

Feel free to contribute by creating a pull request or reporting issues:

- 🔥 Fork the repository
- ⚙️ Make your changes
- 🚀 Submit a pull request

⸻

🛡️ 🔒 **License**

This project is licensed under the MIT License 📄

⸻

🙌 🎯 **Acknowledgments**

Thanks for checking out this CI/CD setup! 😄

Developed & Maintained by Kartikey Narayan – Happy DevOps-ing! 🧑‍💻⚙️

⸻

📌 **PS:** 🔥 Future Updates Coming Soon! 🚀
