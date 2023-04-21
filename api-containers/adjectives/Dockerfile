FROM node:16-alpine

WORKDIR /

RUN \
    echo "==> Install app..."                && \
    npm install -g --production json-server  && \
    \
    \
    echo "==> Remove unused temp..."         && \
    rm -rf /root/.npm                  \
           /usr/lib/node_modules/npm

ENV TERM xterm

COPY adjectives.json /

EXPOSE 8080

WORKDIR /
CMD ["json-server", "--host", "0.0.0.0", "--port", "8080" , "--watch", "adjectives.json"]
