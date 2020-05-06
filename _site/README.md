# My Portfolio

This is my portfolio website.

## Build Command

docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -it jekyll/jekyll:3.8 jekyll build

## Update Command

docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -it jekyll/jekyll:3.8 bundle update

## Run Command

docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -p 4000:4000 -it jekyll/jekyll:3.8 jekyll serve
