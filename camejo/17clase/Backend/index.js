const express = require('express');  // Importamos la librería Express a nuestro código
const app = express();  // Creamos la aplicación en Express
const port = 3000;  // Definimos un puerto

let languages = [
  {
    id: 1,
    name: 'Python',
    yearCreated: 1991,
    lastVersion: '3.11.0 (October 2022)'
  },
  {
    id: 2,
    name: 'Java',
    yearCreated: 1995,
    lastVersion: '20 (September 2023)'
  },
  {
    id: 3,
    name: 'C',
    yearCreated: 1972,
    lastVersion: 'C18 (2018)'
  },
  {
    id: 4,
    name: 'JavaScript',
    yearCreated: 1995,
    lastVersion: 'ES2024 (final version still to be released)'
  },
  {
    id: 5,
    name: 'C++',
    yearCreated: 1983,
    lastVersion: 'C++20 (December 2020)'
  },
  {
    id: 6,
    name: 'Ruby',
    yearCreated: 1995,
    lastVersion: '3.2.2 (February 2024)'
  },
  {
    id: 7,
    name: 'Go',
    yearCreated: 2009,
    lastVersion: '1.21 (August 2024)'
  },
  {
    id: 8,
    name: 'Rust',
    yearCreated: 2010,
    lastVersion: '1.74 (November 2024)'
  },
  {
    id: 9,
    name: 'Swift',
    yearCreated: 2014,
    lastVersion: '5.9 (September 2024)'
  },
  {
    id: 10,
    name: 'PHP',
    yearCreated: 1995,
    lastVersion: '8.3 (August 2024)'
  }
];

//con esta linea todo lo que leamos lo hacemos con formato JSON
//(NO sirve para enviar)
app.use(express.json())



app.get('/', (req, res) => {

  res.send("")
})

app.get('/api/v1/languages', (req, res) => {
  res.send(languages)
}) 



app.get('/api/v1/languages/:id', (req, res) => {


  //find sirve para encontrar el primer elemento de un array
  const language = languages.find((element) => element.id == req.params.id)
  
  /*OTRA FORMA DE HACER LO MISMO

  let language = undefined;
  for (let i = 0; i < languages.lenght; i++){
    if (languages[i].id == req.params.id){
      language = languages[i]}}

   */

  if (language === undefined) {

    res.sendStatus(404)
    return
  }
  res.send(language)
})



app.post('/api/v1/languages', (req, res) => {


  if(req.body.name === undefined || req.body.year === undefined || req.body.version === undefined){
    res.sendStatus(400)
    return
  }

  if (req.get("Authentication") === undefined){
    res.sendStatus(401)
    return
  }
  if (req.get("Authentication") !== "laplaciano"){
    res.sendStatus(403)
    return
  }


  languages.push({
    id: languages[languages.length -1].id +1,
    name: req.body.name,
    year: req.body.year,
    last_version: req.body.version
  })
  res.sendStatus(201)

})

app.delete('/api/v1/languages/:id', (req, res) => {


  if (req.get("Authentication") === undefined){
    res.sendStatus(401)
    return
  }
  if (req.get("Authentication") !== "laplaciano"){
    res.sendStatus(403)
    return
  }

  const language = languages.find((element) => element.id == req.params.id)
  if (language === undefined){
    res.sendStatus(404)
    return
  }

  //con filter filtra de la sigueitne manera:
  //devuelve todos los elementos salvo el id que enviamos

  /*
  
  let new_lenguages = []
  for (let i =0; i < languages.length; i++) {
    if (languages[i].id !== language.id) {
      new_languages-push(languages[i])}}

  languages = new_langueges
  
  */
  languages = languages.filter((element) => element.id !== language.id)

  res.status(200).send(language)
})


app.put('/api/v1/languages/:id', (req, res) => {


  if (req.get("Authentication") === undefined){
    res.sendStatus(401)
    return
  }
  if (req.get("Authentication") !== "laplaciano"){
    res.sendStatus(403)
    return
  }

  const language_index = languages.findIndex((element) => element.id == req.params.id)
  if (language_index === -1){
    res.sendStatus(404)
    return
  }

  if (req.body.name === undefined && req.body.version === undefined) {
    res.sendStatus(404)
    return
  }


  if (req.body.name !== undefined){
    languages[language_index].name = req.body.name
  }

  // ?? sirve en este caso para 
  //si el valor de entrada es el que no esta indefinido entonces responde eso pero SI...
  // ... el valor de entrada es undefined entonces envia languages[language_index].version como RTA

  languages[language_index].last_version  = req.body.version ?? languages[language_index].last_version
  //es lo mismo el de arriba y el de abajo
  //languages[language_index].version  = req.body.version || languages[language_index].version


  res.status(200).send(languages[language_index])
})













app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})