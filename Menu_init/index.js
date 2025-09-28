

function creatingElements(food) {
    let div = document.getElementById('display-section')
    let innerDiv = document.createElement('div')
    innerDiv.id = `food-${food.id}`
    innerDiv.className = `innerDiv ${food.type}`
    innerDiv.innerHTML = `
    <h2>${food.name}</h2>
    <img src="${food.image}" alt="${food.name}" srcset="">
    <p>${food.description}</p>
    <p>Serves: <span id ='food-serves-${food.id}'>${food.serves}</span></p> <p>Amount: Ksh.<span>${food.amount}</span></p>
    `;
    div.appendChild(innerDiv)
     let costButton = document.createElement('button')
    costButton.className = "cost-button"
    costButton.innerText = 'Order'
    innerDiv.appendChild(costButton)
    let foodServes = document.getElementById(`food-serves-${food.id}`)
    CostButtonListener(food, foodServes, costButton)
}
fetch ('http://localhost:3000/food')
.then(res => res.json())
.then(data => {
    allFoodData = data
    data.forEach(food => creatingElements(food))
    filterButton()

})


function filterButton () {
   let  buttons = document.querySelectorAll('.button')
   buttons.forEach(button => {
    button.removeEventListener('click', filterClick )
    button.addEventListener('click', filterClick )   
    })
}

function filterClick(event) {
   const filterId = event.currentTarget.id; 
    renderSpecific(filterId); 
}

function renderSpecific(filterCategory) {
   let foods = document.querySelectorAll('.innerDiv');
   foods.forEach(food => {
   const matching = food.classList.contains(filterCategory) 
   if ( filterCategory === 'all' || matching ) {
    food.style.display = "block";
   }else  {
    food.style.display = 'none'
   }
   })

}

function CostButtonListener (food, foodServes, costButton) {
 
  costButton.addEventListener('click', () => {
    let currentServes = parseInt(foodServes.innerText, 10)
    currentServes-=1
    foodServes.innerText = currentServes
    if (currentServes === 0 ){
        deleteFood(food)
    }
  }
  ) 
}


function deleteFood(food) {
    fetch(`http://localhost:3000/food/${food.id}`,{
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(food)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
