# django_project
Restful API with react

These folders contain the base code for a restful API service. the APP is intended to manage backend inventory for a store, in this case a game store. It stores all the data in a relational database and can be queried by customer, order, or game. It can also further be queried to show orders by customers, specific customer data, specific order data, specific game data.

The container containing the dockerized version can be found here on DockerHub https://hub.docker.com/repository/docker/jkrin393/first.

to run the app i recommend first setting up a python environment to run the container. Assuming python is installed, this can be done with the command

"python -m venv /path/to/new/virtual/environment"

I assume that the docker app is already installed, if not you can download and install here https://docs.docker.com/get-docker/

To run the app from the docker container,

open a terminal instance and enter the command "docker pull jkrin393/first" which can also be copied from the link on the sidebar.

then run the command "docker build PATH | URL | - " where path/url is the local folder you want to save it to.

to run the react app, you will need to have react installed. Then navigate to React_page/storefront and run the command "npm start"
