pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: '4e5ee5cf-5633-4ea1-9d96-229a1802119b', url: 'https://github.com/Sanchit0421/HD '
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Insert your build commands here
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Insert your test commands here
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Insert your deployment commands here
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Add cleanup steps here if necessary
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

