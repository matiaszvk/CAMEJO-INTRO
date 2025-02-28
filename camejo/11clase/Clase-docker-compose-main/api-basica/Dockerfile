FROM node:22-alpine3.19
WORKDIR /app
COPY package.json .
RUN npm install
COPY . /app
CMD ["node", "index.js"] 
# Pregunta clase : XQ CMD y no RUN?
# Pregunta clase : XQ hacemos el Copy de package.json antes que el resto de los archivos?