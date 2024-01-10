let output = document.getElementById('output')
let toDoArray = []
let inputValue

// const reset = () => {
//     output.innerHTML =""
// }
const showList = (el) => { 
    inputValue = document.querySelector('#input').value
    el.forEach((toDos, index) => {
        const div = document.createElement('div')
        let input = document.createElement('input')
        console.log(inputValue);
        input.type = 'checkbox'
        input.id = `checkbox-${toDos.title}`
        const label = document.createElement('label')
        label.textContent = `${toDos.title}`
        label.for = `${toDos.title}`
        let button = document.createElement('button')
        button.id = `button-${toDos.title}`
        button.textContent = "x"

        output.appendChild(div)
        div.appendChild(input)
        div.appendChild(label)
        div.appendChild(button)

        input.addEventListener("change", () => {
            if(input.checked){
                label.style.textDecoration = 'line-through'
            
            }else{
                label.style.textDecoration = 'none'
            }
        })
        document.querySelector(`#button-${toDos.title}`).addEventListener("click", () => {
            if(input.checked){
                div.remove()
                console.log(toDoArray);
                toDoArray.splice(index, 1)
            } else{
                alert("you havent checked your to do!")
            }
        })
    })
}

const reset = () => {
    output.innerHTML = ""
}

const add = () => {
    reset()
    let input = document.querySelector('#input').value
    // linke seite: title ist mein key, die sachen auf der rechten seite sind meine values.
    let toArr = {
        title:input, done: false
    }
    console.log(toArr);
    console.log(toDoArray);
    toDoArray.push(toArr)
    showList(toDoArray)

}













