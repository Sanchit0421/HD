pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from Git
                git 'https://github.com/Sanchit0421/HD.git'
            }
        }
        stage('Build') {
            steps {
                // Run the build command
                echo 'Building the application...'
                // Add build commands here (e.g., npm install or other build tools)
            }
        }
        stage('Test') {
            steps {
                // Run tests
                echo 'Running tests...'
                // Add test commands here (e.g., npm test)
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the application
                echo 'Deploying the application...'
                // Add deployment commands here (e.g., docker build, kubectl apply)
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
