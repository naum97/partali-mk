## Getting Started

### Prerequisites

In order to get the project started you will need to have the following software installed:

- [Docker](https://www.docker.com/) 19+
- [Docker-compose](https://docs.docker.com/compose/install/)
- [Maven](https://maven.apache.org/)

Moreover, if you intend to develop the project, you will need to have the following software as well:

- [Java 11](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)
- [Lombok](https://projectlombok.org/) extension for your IDE; otherwise an error that certain methods have not been implemented will be shown in the IDE.

### Development

In order to set up the project and get ready for development, follow these steps:

1. Pull the Git repository.
2. Import the backend project to your IDE using the `pom.xml` file.
3. For the purposes of development, comment out the `web_app_backend` and `web_app_frontend` sections from the `docker-compose.yml` file.
4. Set the profile to development in the `application.properties` file by editing `spring.profiles.active=prod` to `spring.profiles.active=dev`
5. Execute the docker-compose.yml file via running the `docker-compose up -d` command. You should be able to see that both the `postgres` and the `pgadmin` containers are running.
6. Open `pgadmin` by visiting `localhost:15050`. You can log in using the credidentials as stated in the `docker-compose.yml`.
   - **Email**: `naum97@gmail.com`
   - **Password**: `1234`
7. Once `pgadmin` is running connect to the dev database server, with the following credentials:

   Dev Database:

   - **Name**: name the dev server as you wish.
   - **Host name/address**: `db_dev`
   - **Port**: `5432`
   - **Maintenance Database**: `partali-app`
   - **Username**: `naum97`
   - **Password**: `1234`

   and press `Save`.

8. Run the backend application with the `./mvnw spring-boot:run` command or via Intellij IDE.
9. The address `localhost:8080` is now the entry for the backend.
10. Change the directory to `partali-ui`.
11. Run `npm install && npm start`.
12. Finally, you will be able to access the frontend at `localhost:3000`.

## Helpful Docker Commands

- List all of the running containers `docker ps`
- List all containers `docker ps -a`
- Remove a container `docker container rm *container_id*`
- List docker images `docker image ls`
- Remove an image `docker image rm *image_id*`
- Starting the database containers: `docker-compose up -d`
- Stopping the database containers: `docker-compose stop`
- Removing the database containers: `docker-compose down`
- Pruning everything docker related: `docker system prune`
- Pruning the volumes: `docker volume prune`

Furthermore, a useful docker cheat sheet can be found [here](https://afourtech.com/guide-docker-commands-examples/).
