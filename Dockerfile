FROM node:0.12.7-slim

RUN groupadd -r noderole \
    && useradd -r -m -g noderole noderole \
    && mkdir -p /opt/app \
    && chown noderole:noderole /opt/app
USER noderole
WORKDIR /opt/app

COPY package.json README.md /opt/app/
RUN npm install && rm -rf ~/.npm
COPY . /opt/app/

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]
