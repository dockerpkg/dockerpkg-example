# docker-pkg-example

> Example [zeit/micro](https://github.com/zeit/micro) app running in small docker container using [docker-pkg](https://github.com/beeman/docker-pkg)


### Step 1: Clone the repository

    $ git clone https://github.com/beeman/docker-pkg-example.git

### Step 2: Run the build command

    $ npm run build

This will do 2 things:

- Build the `app.bin` file using the [beeman/docker-pkg-builder](https://hub.docker.com/r/beeman/docker-pkg-builder/) container
- Build a new Docker container based of the [beeman/docker-pkg-runner](https://hub.docker.com/r/beeman/docker-pkg-runner/) container

### Step 3: There is no Step 3!

You have just created a Docker image from <50 MB that runs your application.

Run the container using this command:

    $ docker run -p 3000:3000 -it --name docker-pkg-example --rm beeman/docker-pkg-example:latest

You can stop the running container using this command:

    $ docker stop docker-pkg-example

# Credits

- [zeit/pkg](https://github.com/zeit/pkg)
- [zeit/micro](https://github.com/zeit/micro)

# License

MIT

