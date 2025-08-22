
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
                    bat 'cd frontend && npm install'
                }
            }
        }

        stage('Install Dependencies - Frontend') {
            steps {
                dir('frontend') {
                    bat 'cd frontend && npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'cd frontend && npm install
                }
            }
        }

        stage('Test') {
            steps {
                dir('backend') {
                    bat 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Starting MERN application..."
                    # Example using PM2 (install globally first: npm install -g pm2)
                    # pm2 restart backend/app.js --name stackoverflow-backend
                    # Or simple node start
                    # node backend/app.js &
                '''
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
}

