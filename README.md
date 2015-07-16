http parrot
===========

## About
Tool to echo http request information


## Usage

### Local NodeJS on port 3000

    npm install
    npm start

### Local NodeJS on custom port

    npm install
    PORT=3002 node server.js

### Docker on port 3000

    docker build -t http-parrot .
    docker run -d -p 3000:3000 http-parrot

### Docker on port 3002

    docker build -t http-parrot .
    docker run -d -p 3002:3000 http-parrot

## Test port 3000

    curl http://localhost:3000/some/path?demo=true

## Test port 3002

    curl http://localhost:3002/some/path?demo=true
