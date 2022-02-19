let color = "#FFFFFF";
let red = 0;
let green = 0;
let blue = 0;
let rgb = true;

const titleElement = document.querySelector("#title-element");
const colorButtonElement = document.querySelector("#color-button");
const hexButton = document.querySelector("#hex-button");
const rgbButton = document.querySelector("#rgb-button");

titleElement.innerHTML = `<span class="box">Background Color: ${color}</span>`;

const generateRandomColor = () =>{
    if (rgb){

        red = generateRandomRGBValue()
        green = generateRandomRGBValue()
        blue = generateRandomRGBValue()
    
        titleElement.innerHTML = `<span>Background Color: <span style="color: rgb(${red},${green},${blue});">rgb(${red}, ${green}, ${blue})</span></span>`
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    }else{
        let hash = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        titleElement.innerHTML = `<span>Background Color: <span style="color: ${hash};">${hash}</span></span>`
        document.body.style.backgroundColor = `${hash}`
    }
}

const generateRandomRGBValue = () => Math.floor(Math.random() * 256)

colorButtonElement.addEventListener("click", ()=>{
    console.log("Button clicked")
    generateRandomColor()
})

hexButton.addEventListener("click", () => {
    rgb = false;
})
rgbButton.addEventListener("click", () => {
    rgb = true;
})






