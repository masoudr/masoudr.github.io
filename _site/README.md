# My Portfolio

This is my portfolio website

## Build Command

docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -it jekyll/jekyll jekyll build

## Update Command

docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -it jekyll/jekyll bundle update

## Run Command

docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -p 4000:4000 -it jekyll/jekyll jekyll serve
