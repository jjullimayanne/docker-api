FROM node:alpine 
#ultima versao do node

WORKDIR /usr/app

#copiar todos os arquivos com formato json
COPY package*.json ./
RUN npm install

#copiar todos os arquivos menos node modules que na ignore
COPY . .

EXPOSE 3000

#unica por dockerfile 
CMD ["npm", "start"]
#docker build -t name/name .
#docker run -p 3000:3000 -d namedocker
#docker ps