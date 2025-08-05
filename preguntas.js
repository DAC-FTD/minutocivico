

let btnSave = document.getElementById("btn-save")

btnSave.addEventListener("click", async function(e){
    e.preventDefault()
    
    let form = document.getElementById("formularioEncuesta")
    const data = new URLSearchParams(new FormData(form));
    const response = await fetch("https://script.google.com/macros/s/AKfycbwD0wMCay4Lp0NUiaM63dGMPolvuTiGm6k6F0e30XU-sr0RHmYx0l2qzN5t0svQ-o5B/exec", {
        "method": "POST",
        "body": data,
    })

    const res = await response.json()

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