

let btnSave = document.getElementById("btn-save")
const loaderModal = new bootstrap.Modal(document.getElementById('modalLoader'));

btnSave.addEventListener("click", async function(e){
    e.preventDefault()
    loaderModal.show() 
    let form = document.getElementById("formularioEncuesta");
    const formData = new FormData(form);
    formData.append("accion", "registrarpregunta"); 
    const data = new URLSearchParams(formData);
    const response = await fetch("https://script.google.com/macros/s/AKfycbwvLWoinHBnbfGIr9iXx29eGrUsz6DPHHFBGd-IZIesB2GLub-YPKYS5QAH4pi4CPs3/exec", {
        "method": "POST",
        "body": data,
    })

    const res = await response.json()
    if(res.status == "success"){
        Swal.fire({
            title: "Registrado!!!",
            icon: "Encuesta registrada con éxito",
            timer: 3000,
        });
        loaderModal.hide()
    }
    console.log(res);
    return res
})

let contador = 0

const agregarPregunta = () => {
    console.log("Hiciste click");
    contador++

    let containerAnswers = document.getElementById("container-answers");

    let answers = document.createElement("div");
    answers.className = "form-check";
    answers.innerHTML = `
      <input class="form-check-input" disabled type="radio" name="res5" value="Mayor variedad en los perfiles de los homenajeados (incluir jóvenes emprendedores, mujeres líderes, innovadores tecnológicos, etc.)" required>
      <textarea class="form-control" name="res${contador}" id="message" name="message" rows="2" cols="50" value="Mayor variedad en los perfiles de los homenajeados (incluir jóvenes emprendedores, mujeres líderes, innovadores tecnológicos, etc.)."></textarea>
    `;

    containerAnswers.appendChild(answers);
}

let btnAgregar = document.getElementById("btn-add")
btnAgregar.addEventListener("click", agregarPregunta)