FROM node:0.12.7-slim

RUN groupadd -r noderole \
    && useradd -r -m -g noderole noderole \
    && mkdir -p /var/app \
    && chown noderole:noderole /var/app
USER noderole
WORKDIR /var/app

COPY package.json README.md /var/app/
RUN npm install
COPY . /var/app/

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]
