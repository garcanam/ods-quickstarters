FROM node:22-alpine

COPY dist /node

RUN chown -R node: /node

EXPOSE 8080

USER node

WORKDIR /node

CMD ["node", "dist/src/index.js"]
