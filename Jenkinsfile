pipeline {
    agent any
    
    stages {
        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build('graphql-vanilla-v1.0.0', '-f Dockerfile ./src') {

                    }
                }
            }
        }
    }
}