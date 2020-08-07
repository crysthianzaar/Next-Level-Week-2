// Proucurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
// Quando clicar no botão

//executar uma ação
function cloneField(){
    //duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. Que campos?
    const fields  = newFieldContainer.querySelectorAll('input')

    //limpar
    fields.forEach(function(field){
        field.value = ""
    })
    //colocar na página, onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

 
    // Duplicar os campos

    // Colocar na página