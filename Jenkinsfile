
pipeline {
    agent any

    environment {
        NODE_VERSION = '18'  
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Saurabh9955668228/StackOverFlowClone.git'
            }
        }

        stage('Set up Node.js') {
            steps {
                bat 'node -v'
            }
        }

        stage('Install Dependencies - Backend') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Install Dependencies - Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                 echo "No Test defined. skipping..."
                }
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying app...'
            }
        }
    }

    post {
        success {
            echo "🎉 Pipeline completed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }


