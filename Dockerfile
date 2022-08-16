FROM jekyll/jekyll:latest

RUN apk update && apk add imagemagick
RUN npm install -g mermaid.cli
