pipeline {
    agent any

    stages {

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh 'docker compose build'
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                echo 'Logging into Docker Hub...'

                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker push adithiya123/deployflow-backend:latest
                        docker push adithiya123/deployflow-frontend:latest

                        docker logout
                    '''
                }
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