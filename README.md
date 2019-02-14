
#pre-requisites
Docker - 18.09.o and above

#Steps to install Docker 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce

#Development server with Docker

--Run this command first time of environment setup
     "sudo docker build -t integration-ui . "

-- To start the service 
     "sudo docker run -it -v ${PWD}:/usr/src/app -p 4200:4200 integration-ui"
           
           
#Docker help 

-To list all container 
    "docker container ls"
    
-To rm container
    "sudo docker stop  <<container_id>>"
    
- to stop container
    "sudo docker rm <<container_id>>"
