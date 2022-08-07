pipeline {
    agent any 
    stages {
	stage ('Cloning our code') {	
	    steps {
		git 'https://github.com/RahulKumar1119/microservices-demo-1.git'
		}
	}
	
	stage('Building our image') { 
            steps { 
		sh "sudo docker build src/adservice/. -t 9870050478/adservice:$BUILD_NUMBER"
		sh "sudo docker tag 9870050478/adservice:$BUILD_NUMBER 9870050478/adservice:v1"
		sh "sudo docker push 9870050478/adservice:v1"
		
		sh "sudo docker build src/cartservice/. -t 9870050478/cartservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/cartservice:$BUILD_NUMBER 9870050478/cartservice:v1"
                sh "sudo docker push 9870050478/cartservice:v1"

		sh "sudo docker build src/checkoutservice/. -t 9870050478/checkoutservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/checkoutservice:$BUILD_NUMBER 9870050478/checkoutservice:v1"
                sh "sudo docker push 9870050478/checkoutservice:v1"
		
		sh "sudo docker build src/emailservice/. -t 9870050478/emailservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/emailservice:$BUILD_NUMBER 9870050478/emailservice:v1"
                sh "sudo docker push 9870050478/emailservice:v1"

		sh "sudo docker build src/currencyservice/. -t 9870050478/currencyservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/currencyservice:$BUILD_NUMBER 9870050478/currencyservice:v1"
                sh "sudo docker push 9870050478/currencyservice:v1"
		
		sh "sudo docker build src/frontend/. -t 9870050478/frontend:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/frontend:$BUILD_NUMBER 9870050478/frontend:v1"
                sh "sudo docker push 9870050478/frontend:v1"
		
		sh "sudo docker build src/loadgenerator/. -t 9870050478/loadgenerator:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/loadgenerator:$BUILD_NUMBER 9870050478/loadgenerator:v1"
                sh "sudo docker push 9870050478/loadgenerator:v1"

		sh "sudo docker build src/paymentservice/. -t 9870050478/paymentservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/paymentservice:$BUILD_NUMBER 9870050478/paymentservice:v1"
                sh "sudo docker push 9870050478/paymentservice:v1"
		
		sh "sudo docker build src/productcatalogservice/. -t 9870050478/productcatalogservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/productcatalogservice:$BUILD_NUMBER 9870050478/productcatalogservice:v1"
                sh "sudo docker push 9870050478/productcatalogservice:v1"
		
		sh "sudo docker build src/recommendationservice/. -t 9870050478/recommendationservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/recommendationservice:$BUILD_NUMBER 9870050478/recommendationservice:v1"
                sh "sudo docker push 9870050478/recommendationservice:v1"		
		
		sh "sudo docker build src/shippingservice/. -t 9870050478/shippingservice:$BUILD_NUMBER"
                sh "sudo docker tag 9870050478/shippingservice:$BUILD_NUMBER 9870050478/shippingservice:v1"
                sh "sudo docker push 9870050478/shippingservice:v1"
	
		        }
                }
        }
}

