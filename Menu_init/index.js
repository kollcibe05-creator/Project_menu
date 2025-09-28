
//Creating the struture  automatically rendered div elements from the server 
function creatingElements(food) {
    let div = document.getElementById('display-section')    //getting the section to input the generated data
    let innerDiv = document.createElement('div')           //styling the data to be output
    innerDiv.id = `food-${food.id}` //dynamically giving the data to be generated an id to ensure correct syntax//
    innerDiv.className = `innerDiv ${food.type}` ////dynamically giving the data to be generated a class name to ensure correct syntax//
    innerDiv.innerHTML = `
    <h2>${food.name}</h2>
    <img src="${food.image}" alt="${food.name}" srcset="">
    <p>${food.description}</p>
    <p>Serves: <span id ='food-serves-${food.id}'>${food.serves}</span></p> <p>Amount: Ksh.<span>${food.amount}</span></p>
    `;
    div.appendChild(innerDiv)                                   //appending the innerDiv
     let costButton = document.createElement('button')//creating a button
    costButton.className = "cost-button"
    costButton.innerText = 'Order'
    innerDiv.appendChild(costButton)                 //appending the button
    let foodServes = document.getElementById(`food-serves-${food.id}`)     //dynamically declaring the id to be used in filtering
    CostButtonListener(food, foodServes, costButton)        //calling the costButtonListener
}
//GET//
fetch ('http://localhost:3000/food')
.then(res => res.json())
.then(data => {
    allFoodData = data
    data.forEach(food => creatingElements(food))
    filterButton()                                        //calling the filterButton command to act on the fetched data which is an array

})

         
function filterButton () {
   let  buttons = document.querySelectorAll('.button')
   buttons.forEach(button => {
    button.removeEventListener('click', filterClick )
    button.addEventListener('click', filterClick )   
    })
}

function filterClick(event) {    
   const filterId = event.currentTarget.id;  //getting the id of the button ID
    renderSpecific(filterId);        // calling the function that takes the id as a parameter and acts on it
}

//renders the elements after filter basing on their type
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

//Reducer function on the serves
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

//DELETE//
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


// light-mode button//
let light = document.getElementById("light-mode")
light.addEventListener('click', () => document.body.style.backgroundColor = "white")

//Additional event listener 
document.getElementById('additional').addEventListener('click', () => 
alert(`Thank you for your time. 
 More perks coming soon!!`)) 