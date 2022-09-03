FROM node:alpine 
#ultima versao do node

WORKDIR /usr/app

#copiar todos os arquivos com formato json
COPY package*.json ./
RUN npm install

#copiar todos os arquivos menos node modules que na ignore
COPY . .

EXPOSE ${PORT}

#unica por dockerfile 
CMD ["npm", "start"]
#docker 