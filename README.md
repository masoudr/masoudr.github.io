# Portfolio

This is my portfolio website source code.

## Build Command

```bash
docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle jekyll/jekyll:3.8 jekyll build
```

## Update Command

```bash
docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle jekyll/jekyll:3.8 bundle update
```

## Run Command

```bash
docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -p 4000:4000 -it jekyll/jekyll:3.8 jekyll serve
```
