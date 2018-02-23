const peticion = new EasyHTTP();

peticion.get("https://jsonplaceholder.typicode.com/posts", agregarDOM);

function agregarDOM(err, respuesta) {
  if (err) {
    console.log(err);
  } else {
    console.log(respuesta);
  }
}
