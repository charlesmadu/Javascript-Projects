let count = 0;

const decreaseButton = document.querySelector("#decrease-button");
const resetButton = document.querySelector("#reset-button");
const increaseButton = document.querySelector("#increase-button");
const counterElement = document.querySelector("#counter-element");

decreaseButton.addEventListener("click", () =>{
    count -= 1;
    render()
})

resetButton.addEventListener("click", () =>{
    count = 0;
    render()
})

increaseButton.addEventListener("click", () =>{
    count += 1;
    render()
})

const render = () => {

    if (count === 0){
        counterElement.textContent = count;
    }else{
        if (count > 0){
           counterElement.innerHTML = `<span class="positive-number">${count}</span>` 
        }else{
            counterElement.innerHTML = `<span class="negative-number">${count}</span>`
        }
    }



}