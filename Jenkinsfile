pipeline {
    agent any // Use any available agent

    environment {
        NODE_ENV = 'production' // Define your environment variable
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the application...'
                    sh 'npm install' // Install dependencies
                    sh 'npm run build' // Build the application
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test' // Run your test suite
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    echo 'Running code quality analysis...'
                    sh 'npm run lint' // Run your linter or code quality checker
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the application...'
                    // Your deployment commands go here
                    // For example: sh 'deploy.sh'
                }
            }
        }

        stage('Release') {
            steps {
                script {
                    echo 'Releasing the application...'
                    // Your release commands go here
                    // For example: sh 'release.sh'
                }
            }
        }

        stage('Monitor') {
            steps {
                script {
                    echo 'Monitoring application...'
                    // Your monitoring commands go here
                    // For example: sh 'monitor.sh'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Any cleanup steps, if necessary
        }

        success {
            echo 'The build was successful!'
            // Notify success, e.g., send email or message
        }

        failure {
            echo 'The build failed.'
            // Notify failure, e.g., send email or message
        }
    }
}
