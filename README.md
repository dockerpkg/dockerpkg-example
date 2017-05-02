# dockerpkg-example

> Example [zeit/micro](https://github.com/zeit/micro) app running in small docker container using [dockerpkg](https://github.com/dockerpkg/dockerpkg)


### Step 1: Clone the repository, install dependencies

    $ git clone https://github.com/dockerpkg/dockerpkg-example.git
    $ cd dockerpkg-example
    $ npm install

### Step 2: Run the build command

    $ npm run build

This will do 2 things:

- Build the `app.bin` file using the [dockerpkg/builder](https://hub.docker.com/r/dockerpkg/builder/) container
- Build a new Docker container based of the [dockerpkg/runner](https://hub.docker.com/r/dockerpkg/runner/) container

### Step 3: There is no Step 3!

You have just created a <50 MB Docker image that runs your application.

Run the container using this command:

    $ docker run -p 3000:3000 -it --name dockerpkg-example --rm dockerpkg/dockerpkg-example:latest

Verify that it works:

    $ curl localhost:3000

You can stop the running container using this command:

    $ docker stop dockerpkg-example

# Credits

- [zeit/pkg](https://github.com/zeit/pkg)
- [zeit/micro](https://github.com/zeit/micro)

# License

MIT

