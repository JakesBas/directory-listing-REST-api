# directory-listing-REST-api
A Node.js REST api that uses an express framework to fetch data from a local filesystem.


This repository is intended to be used in conjunction with the repository listed as 'directory-listing-web-app'.
It serves as a REST api that fetches information on a given directory and lists the files and folders with their
respected size and attributes.

The api can be run by downloading the repo to a destination file. The following command lines should be performed to
host the api locally.

First navigate to the directory where the repo was downloaded in a command line interface.

Type in the following command:
-> node app.js

The api will start hosting on localhost:8000.

Run a docker image with:
-> docker run --rm -p 4200:80 jacobasson/directory_listing:angular_directory_listing_app

Navigate to localhost:4200 using a browser of your choice to test the web app functionality.
The repository for the angular web app can be found at https://github.com/JakesBas/directory-listing-web-app.
