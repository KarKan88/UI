
#Using Node Version
FROM node:9.2.1

#Creating the Project Directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
#Installing Angular
RUN npm install -g @angular/cli
RUN npm install
RUN npm install --save-dev @angular-devkit/build-angular

COPY . /usr/src/app

#Starting the web service
CMD ng serve --host 0.0.0.0 --port 4200

