const nombres = [
  "beymar",
  "clefas",
  "wilson",
  "brayan",
  "jesus",
  "cachis",
  "eugenio",
  "yorch",
  "joel",
  "jhon"
];

function presionar() {
  let Ganador = nombres[parseInt(Math.random()*nombres.length)];
  document.getElementById('ganador').value = Ganador;
}

function mostrarLista() {
  // Obtener el elemento div con id 'lista'
  let listaDiv = document.getElementById('lista');

  // Crear un elemento de lista desordenada (ul)
  let ul = document.createElement('ul');

  // Iterar a través del array nombres y crear elementos de lista para cada nombre
  nombres.forEach(nombre => {
      let li = document.createElement('li');
      li.textContent = nombre;
      ul.appendChild(li);
  });
  listaDiv.innerHTML = '';

  // Agregar la lista desordenada al listaDiv
  listaDiv.appendChild(ul);
}
