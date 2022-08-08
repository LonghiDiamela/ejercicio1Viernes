let btnEnviar=document.getElementById("btnEnviar");
let dato=document.getElementById("dato");
let rotulo=document.getElementById("rotulo");

btnEnviar.addEventListener("click", () => {
  console.log("el dato ingresado es", dato.value);
})


rotulo.innerHTML="ingrese un dato: ";