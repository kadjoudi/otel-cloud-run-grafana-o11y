FROM node:20.12.0-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
ENV PORT=8080
CMD [ "npm", "start" ]
