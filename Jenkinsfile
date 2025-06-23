pipeline {
    agent any
    stages {
        stage('Lint'){
            agent {
                docker {
                    image 'node'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    echo "Linting"
                    npm run lint
                '''
            }
        }
        stage("Build") {
            agent {
                docker {
                    image 'node'
                    reuseNode true
                }
            }
            steps {
                sh '''
                   ls -al
                   node --version
                   npm --version
                   npm ci
                   npm run build
                   ls -al
                '''
            }
        }
        stage("Test"){
            steps {
                sh "test -f dist/index.html"
            }
        }
    }
}