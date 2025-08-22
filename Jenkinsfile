
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
               dir ('backend') {
                   bat 'npm install -g pm2'


                   bat 'pm2 delete all || echo "No Process to delete"

                   bat 'pm2 start server.js --name backend-app'
               }
                dir('frontend') {
                    bat 'npm install -g serve'
                    bat 'pm2 start serve --name frontend-app -- -s build -l 3000'
                }
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


