def ACTIVE = ""
def TARGET = ""

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

                    ACTIVE = sh(
                        script: './detect-active.sh',
                        returnStdout: true
                    ).trim()

                    echo "Detected Active Environment: ${ACTIVE}"
                }
            }
        }

        stage('Deploy Inactive Environment') {
            steps {
                script {

                    if (ACTIVE == "blue") {

    echo "Blue is active. Deploying Green..."

    TARGET = "green"

    sh './deploy-green.sh'

} else {

    echo "Green is active. Deploying Blue..."

    TARGET = "blue"

    sh './deploy-blue.sh'

}
                }
            }
        }

        stage('Switch Traffic') {
            steps {
                script {

                   echo "Switching traffic to ${TARGET}"

                    sh "./switch.sh ${TARGET}"

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
             echo "Current Live Environment: ${TARGET}"
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