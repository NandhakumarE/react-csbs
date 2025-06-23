pipeline {
    agent any
    stages {
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
    }
}