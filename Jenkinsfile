pipeline {
  agent any

  stages {
    stage('Build image') {
      steps {
        script {
          docker.build('graphql-vanilla', '-f Dockerfile .')
        }
      }
    }

    stage('Run docker') {
      steps {
        script {
          sh "docker run --name graphql-vanilla -d graphql-vanilla"
        }
      }
    }
  }
}
