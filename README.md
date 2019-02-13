# directory-listing-REST-api
A Node.js REST api that uses an express framework to fetch data from a local filesystem.


This repository is intended to be used in conjunction with the repository listed as 'directory-listing-web-app'.
The repository for the angular web app can be found [here](https://github.com/JakesBas/directory-listing-web-app).

This repo serves as a REST api that fetches information on a given directory and lists the files and folders with their
respected size and attributes.


# Using this repo

The api can be run by downloading the repo to a destination file on your local filesystem.


## Hosting the api locally
 Using a command line interface, navigate to the directory where the repo was downloaded.

Type in the following command:

``` node app.js ```

The api will start hosting on [localhost:8000](http://localhost:8000).

## Run the Angular web app (running the docker image)

Run a docker image with:

``` docker run --rm -p 4200:80 jacobasson/directory_listing:angular_directory_listing_app ```

Navigate to [localhost:4200](http://localhost:4200) using a browser of your choice to test the web app functionality.



