FROM node
WORKDIR /node-hw
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["node", "server"]
