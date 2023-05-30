pipeline {
  agent any

  stages {
    stage ('Verify tooling') {
      steps {
        sh '''
          docker version
          docker info
          docker -v
          docker-compose -v
          curl --version
        '''
      }
    }
    /*
    stage('Build image') {
      steps {
        script {
          docker.build('graphql-vanilla', '-f Dockerfile .')
        }
      }
    }
    */
    stage('Run docker-compose') {
      steps {
        script {
          sh "docker-compose up -d"
        }
      }
    }
  }
}
