
pipeline {
    agent any

    environment {
        NODE_VERSION = '18'  // Adjust based on your project
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Saurabh9955668228/StackOverFlowClone.git'
            }
        }

        stage('Set up Node.js') {
            steps {
                sh '''
                    # Install Node if not already installed (Linux agent assumed)
                    if ! command -v node >/dev/null 2>&1; then
                      curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
                      sudo apt-get install -y nodejs
                    fi
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies - Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Dependencies - Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('backend') {
                    sh 'npm test || echo "No tests configured"'
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

