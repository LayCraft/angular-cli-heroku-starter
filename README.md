# AngularCliHerokuStarter

Heroku is not currently set up to serve Angular2+ apps out of the box. This package uses server.js to point to the dist folder. Angular-cli dependencies are copied to heroku in production so that heroku can build using the angular-cli commands. This implements some fixes for routing and forces https. It also declares the engines to allow for good future friendliness. This uses Angular4 as a starting point. This is highly derivative on work done by chenkie but it uses a more up-to-date version of angular-cli.

I want this project to work as a starter:

1. Fork the repo or clone it locally.

2. Point Heroku deployment at your branch on github.

3. Create your angular-cli app locally and push it to your github.

If this all worked properly you will have a nice deployment channel.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.
