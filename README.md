# Environment Configuration Reader

## Aim
To create a Node.js program that reads environment
variables using process.env.

## Description
This program reads the port number from
process.env.PORT and uses 8080 as the default
port when no value is provided.

It also reads the active environment mode
using process.env.NODE_ENV.

## Concepts Used
- Node.js
- process.env
- Environment Variables
- Default Values

## Execution
node app.js

## Custom Port
$env:PORT=5000
node app.js

## Production Mode
$env:PORT=4000
$env:NODE_ENV="production"
node app.js

## Expected Default Output
Port Number: 8080
Environment Mode: development
