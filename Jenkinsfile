pipeline {
  agent any
  stages {
    stage('build sin test') {
      steps {
        nodejs(nodeJSInstallationName: 'node') {
          sh 'npm install'
          sh 'npm rebuild'
          sh 'npm run build --skip-test'
          archiveArtifacts(artifacts: 'dist/**', onlyIfSuccessful: true)
        }        
      }
    }

    stage('unitTest') {
      steps {
        nodejs(nodeJSInstallationName: 'node') {
          sh 'npm run test-ci'
          junit 'TESTS-*.xml'
          archiveArtifacts(artifacts: 'coverage/**', onlyIfSuccessful: true)
        }
      }
    }
    
    stage('static analysis') {
      steps {
        nodejs(nodeJSInstallationName: 'node') {
          script{
            def scannerHome = tool 'sonar-scanner';
            withSonarQubeEnv('sonar-cloud') {
              echo "branch_name: $BRANCH_NAME"
              sh "${scannerHome}/bin/sonar-scanner"          
            }
            def qualitygate = waitForQualityGate()
            if (qualitygate.status != "OK") {
              error "Pipeline aborted due to quality gate coverage failure: ${qualitygate.status}"
            }
          }    
        }    
      }
    }

    stage('deploy') {
      steps {
        withAWS(credentials: 'aws-credentials', region: 'us-east-1') {
          s3Upload(bucket: 'udem20202-equipo7', file:'dist/pet-book')
        }        
      }
    }

    stage('e2e') {
      steps {
        dir('e2e'){
          sh 'echo ejecutadas'
        }        
      }
    }

  }
}
