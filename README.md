# Portfolio

This is my portfolio website source code.

## Build Command

```bash
docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle jekyll/jekyll jekyll build
```

## Update Command

```bash
docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle jekyll/jekyll bundle update
```

## Run Command

```bash
docker run -v %cd%:/srv/jekyll -v %cd%/vendor/bundle:/usr/local/bundle -p 4000:4000 -it jekyll/jekyll jekyll serve
```
