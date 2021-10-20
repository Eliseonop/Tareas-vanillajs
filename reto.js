
class Tareas {
  constructor(texto) {
    //se va a encargar de construir el objeto
    this.texto = texto;
    this.agregar()
    this.borrar()
    this.reset()
    this.focus()
  } 

  reset(){
    let formulario = document.getElementById("formulario");
    formulario.reset()
  };
  focus(){ 
    let input = document.querySelector("input");
    input.focus()
  };

  agregar(){
    if (this.texto.trim() === "") {
    console.log("está vacio");
    return;
  }
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr")

    tr.innerHTML = `<td id="td">${this.texto}</td>
                      <td>undefined </td>
                      <td> undefined</td>
                      <td> <button id="borrar" class="btn btn-danger ">borrar</button> </td>
                      `
    tbody.appendChild(tr)
  }


  borrar () {
  
      let borrar = document.getElementById("tbody")
      
      borrar.addEventListener("click", (e)=>{
      
        if(e.target.id == "borrar"){
          let lista = e.target.parentElement
          lista.parentElement.remove()
      }
      })
      
  }
}

 let form = document.getElementById("formulario");
form.addEventListener("submit", (e =>{
  e.preventDefault()
  // let tarea = document.getElementById("input").value
  new Tareas(document.getElementById("input").value)
}))





  
