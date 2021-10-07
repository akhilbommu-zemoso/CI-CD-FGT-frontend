import groovy.transform.Field

podTemplate(containers: [
	containerTemplate(name: 'fgt-docker', image: 'docker:19.03', command: 'cat', ttyEnabled: true)],
	volumes: [hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')]) {
	node(POD_LABEL){
		environment {
			
 			DOCKERHUB_CREDENTIALS= credentials('akhil-dockerhub')
 		}
		stage('Build Docker'){
			git 'https://github.com/akhilbommu-zemoso/CI-CD-FGT-frontend.git'
			container('fgt-docker'){
				sh 'docker build -t akhilzemoso/fe_fgt_jenkins:latest .'
				sh 'docker tag akhilzemoso/fe_fgt_jenkins:latest akhilzemoso/fe_fgt_jenkins:${BUILD_NUMBER}'
			}
		}
		stage('Push Docker'){
			container('fgt-docker'){
				sh 'ls'
				withCredentials([usernamePassword(credentialsId: 'akhil-dockerhub', usernameVariable: 'username', passwordVariable: 'password')]) {
					sh 'docker login -u $username -p $password'
					sh 'docker push akhilzemoso/fe_fgt_jenkins:${BUILD_NUMBER}'
					sh 'docker push akhilzemoso/fe_fgt_jenkins:latest'
				}	           
			}
		}
		stage ('Invoking helm build') {
		    build job: 'fgt', parameters: [string(name: 'fe_tag', value: BUILD_NUMBER)]
	    	}
	}
}


// pipeline{
// 	agent{		
// 		kubernetes {		    
// yaml '''
// apiVersion: v1
// kind: Pod
// spec:
//   containers:
//   - name: docker
//     image: docker:19.03
//     command:
//     - cat
//     tty: true
//     volumeMounts:
//     - name: dockersock
//       mountPath: /var/run/docker.sock
//   volumes:
//     - name: dockersock
//       hostPath:
//         path: /var/run/docker.sock
// '''
// 		}
// 	}
			
// 	environment {
// 		VERSION = "${env.GIT_COMMIT}"
// 		DOCKERHUB_CREDENTIALS= credentials('akhil-dockerhub')
// 		MY_KUBECONFIG = credentials('master2-rishmita')
// 	}
// 	stages{
// 		stage('Checkout Source') {
// 			steps {
// 			        git 'https://github.com/akhilbommu-zemoso/CI-CD-FGT-frontend.git'
//       			}
//     		}
	    
// 		stage('Build Docker'){
// 			steps{
// 				container('docker'){
// 					sh 'docker build -t akhilzemoso/fe_fgt_jenkins:${VERSION} .'
// 					sh 'docker images'
// 				}
// 			}
// 		}
		
// 		stage('Push Docker'){
// 			steps{
// 				container('docker'){
// 					sh 'ls'
// 				    	withCredentials([usernamePassword(credentialsId: 'akhil-dockerhub', usernameVariable: 'username', passwordVariable: 'password')]) {
// 						sh 'echo $PASSWORD'
// 				       	sh 'docker login -u $username -p $password'
// 						sh 'docker push akhilzemoso/fe_fgt_jenkins:${VERSION}'
// 					    	}	           
// 				}
// 			}
// 		}	
// 	}    
// 	post{
// 		always{
// 	        	container('docker'){
// 	        		sh 'docker logout'
// 	   	 	}
// 	   	}
// 	}
// }

