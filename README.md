# Portfolio

This is my portfolio website source code.

## Build Command

```bash
docker image build -f Dockerfile -t jekyll/jekyll:al-folio .
docker run --rm -v %cd%:/srv/jekyll -v %cd%/.bundle:/usr/local/bundle jekyll/jekyll:al-folio bundle install
docker run --rm -v %cd%:/srv/jekyll -v %cd%/.bundle:/usr/local/bundle jekyll/jekyll:al-folio jekyll build
```

## Update Command

```bash
docker run --rm -v %cd%:/srv/jekyll -v %cd%/.bundle:/usr/local/bundle jekyll/jekyll:al-folio bundle update
```

## Run Command

```bash
docker run --rm -v %cd%:/srv/jekyll -p 8080:4000 -it jekyll/jekyll:al-folio jekyll serve
```
