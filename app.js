
//selectores
const $input = document.querySelector('input')
const $add = document.querySelector('div button')
const $ul = document.querySelector('ul')

// Al pulsar el button add

$add.onclick = () => {
    if (!$input.value)
    return alert('Porfavor, escriba una Tarea!')

    const html = 
    `<li>
      <span>${$input.value}</span>
      <button onclick="borrar(this)">Eliminar</button>
    </li>`

 $ul.insertAdjacentHTML('beforeend', html)

}

function borrar($elemento){
    $elemento.parentElement.remove()
}
