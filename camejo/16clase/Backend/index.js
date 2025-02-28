const express = require('express');  // Importamos la librería Express a nuestro código
const app = express();  // Creamos la aplicación en Express
const port = 3000;  // Definimos un puerto

// Definimos una ruta raíz ("/") y aplicamos un método GET
app.get('/', (req, res) => {

  // Obtenemos el User-Agent de la solicitud
  const user_agent = req.get("user-agent")
  res.header('Server', 'Intro al Des. de Soft.')
  // res.header('Content-Type', 'text/plain')
  let body = ""
  if (user_agent.includes("Mac OS")) {
    body = `<h1>El link de descarga para MacOS es: ...</h1>`
  } else if (user_agent.includes("Windows")) {
    body = `El link de descarga para Windows es: ....`
  } else if (user_agent.includes("Linux")) {
    body = `El link de descarga para Linux es: ....`
  } else {
    body = "No conozco tu sistema operativo :'("
  }

 // Enviamos la respuesta con el User-Agent y el mensaje correspondiente
  res.send(body)
})

app.get('/download', (req, res) => {
  const user_agent = req.get("user-agent")
  let os = "unknown"
  if (user_agent.includes("Mac OS")) {
    os = `macos`
  } else if (user_agent.includes("Windows")) {
    os = `windows`
  } else if (user_agent.includes("Linux")) {
    os = `linux`
  }
  res.redirect(`/download/${os}`)
})

app.get('/download/macos', (req, res) => {
  res.send("Downloading for MacOS...")
})

app.get('/download/windows', (req, res) => {
  res.send("Downloading for Windows...")
})

app.get('/download/linux', (req, res) => {
  res.send("Downloading for Linux...")
})


// Hacemos que el servidor escuche las peticiones HTTP en el puerto especificado
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
