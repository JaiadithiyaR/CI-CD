pipeline {
    agent any

    environment {
        ACTIVE = ""
        TARGET = ""
    }

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
        stage('Grant Execute Permission') {
            steps {
                 sh '''
                chmod +x detect-active.sh
                chmod +x deploy-blue.sh
                chmod +x deploy-green.sh
                chmod +x switch.sh
        '''
              }
        }

        stage('Detect Active Environment') {
            steps {
                 script {

                def output = sh(
                    script: './detect-active.sh',
                    returnStdout: true
                ).trim()

                 echo "OUTPUT = '${output}'"

                 env.ACTIVE = output

                echo "ACTIVE = '${env.ACTIVE}'"
                  }
             }
        }

        stage('Deploy Inactive Environment') {
            steps {
                script {

                    if (env.ACTIVE == "blue") {

                        echo "Blue is active. Deploying Green..."

                        sh './deploy-green.sh'

                        env.TARGET = "green"

                    } else {

                        echo "Green is active. Deploying Blue..."

                        sh './deploy-blue.sh'

                        env.TARGET = "blue"

                    }
                }
            }
        }

        stage('Switch Traffic') {
            steps {
                script {

                    echo "Switching traffic to ${env.TARGET}"

                    sh "./switch.sh ${env.TARGET}"

                }
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Deployment Status'
                sh 'docker ps'
            }
        }
    }

    post {

        success {
            echo "======================================"
            echo "Blue-Green Deployment Successful!"
            echo "Current Live Environment: ${env.TARGET}"
            echo "======================================"
        }

        failure {
            echo "======================================"
            echo "Deployment Failed!"
            echo "Traffic was NOT switched."
            echo "======================================"
        }
    }
}
