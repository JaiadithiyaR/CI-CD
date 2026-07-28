pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh 'docker compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                echo 'Stopping old containers...'
                sh 'docker compose down || true'

                echo 'Deploying application...'
                sh 'docker compose up -d'
         }
}

        stage('Verify Deployment') {
            steps {
                echo 'Checking running containers...'
                sh 'docker ps'
            }
        }
    }

    post {

        success {
            echo 'Deployment Successful!'
        }

        failure {
            echo 'Deployment Failed!'
        }
    }
}