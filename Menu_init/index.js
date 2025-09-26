
function creatingElements(food) {
    let div = document.getElementById('display-section')
    let innerDiv = document.createElement('div')
    innerDiv.id = "innerDiv"
    innerDiv.className ="innerDiv"
    innerDiv.innerHTML = `
    <h2>${food.name}</h2>
    <img src="${food.image}" alt="${food.name}" srcset="">
    <p>${food.description}</p>
    <p>Serves: <span>${food.serves}</span></p> <p>Amoount: <span>${food.amount}</span></p>
    `;
    div.appendChild(innerDiv)


}
fetch ('http://localhost:3000/food')
.then(res => res.json())
.then(data => data.forEach(food => creatingElements(food)))


function filterButton (food) {
   let  buttons = document.querySelectorAll('.button')
   buttons.forEach(button => {
    button.addEventListener('click', () => renderSpecific(food))}
   )

}
function renderSpecific(food) {
   let foods = document.querySelectorAll('.innerDiv')
   foods.forEach(food => {
    if (food.type == button.id) {
        foods.style.display = ""
    }
    return foods
   })

    if (food.name == button.id ){
        console.log(food.name)
    }
}