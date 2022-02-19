let clickedA =  true;
let clickedB =  true;
let clickedC =  true;

const sectionOneOpenElement = document.getElementById("section-1-open-element");
const sectionTwoOpenElement = document.getElementById("section-2-open-element");
const sectionThreeOpenElement = document.getElementById("section-3-open-element");

const sectionOneText = document.getElementById("section-1-answer");
const sectionTwoText = document.getElementById("section-2-answer");
const sectionThreeText = document.getElementById("section-3-answer");

const text = [
    {
        question:"Do You Accept All Major Credit Cards?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit."
    },
    {
        question:"Do You Suppport Local Farmers?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit."
    },
    {
        question:"Do You Use Organic Ingredients?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit."
    }
]



sectionOneOpenElement.addEventListener("click", ()=>{

    if(clickedA){
        document.getElementById("section-1-click-icon").src = "minus.jpg";
        document.getElementById("section-2-click-icon").src = "plus.jpg";
        document.getElementById("section-3-click-icon").src = "plus.jpg";
    
        // change the size of the box and close the other boxes
        document.getElementById("section-1-box").style.height = "14vh";
        document.getElementById("section-2-box").style.height = "6vh";
        document.getElementById("section-3-box").style.height = "6vh";
    
        // add padding to the top of the second box to make it look nice
        document.getElementById("section-1").style.paddingBottom = "1%";
    
        //Add answer text to first section and close the other section boxes
        sectionTwoText.innerHTML = `<div class="answer" id="section-2-answer"></div>`;
        sectionThreeText.innerHTML = `<div class="answer" id="section-3-answer"></div>`;

        setTimeout(function(){
            sectionOneText.innerHTML = `
            <hr/>
            <div class="answer-text"><p>
                ${text[0].answer}
            </p></div>`;
        }, 80 );

        clickedA = false;
        clickedB = true;
        clickedC = true;
    }
    else{
        document.getElementById("section-1-box").style.height = "6vh";
        sectionOneText.innerHTML = `<div class="answer" id="section-1-answer"></div>`;
        document.getElementById("section-1-click-icon").src = "plus.jpg";
        
        clickedA = true;
    }
})

sectionTwoOpenElement.addEventListener("click", ()=>{

    if(clickedB){
        document.getElementById("section-1-click-icon").src = "plus.jpg";
        document.getElementById("section-2-click-icon").src = "minus.jpg";
        document.getElementById("section-3-click-icon").src = "plus.jpg";
    
        document.getElementById("section-1-box").style.height = "6vh";
        document.getElementById("section-2-box").style.height = "14vh";
        document.getElementById("section-3-box").style.height = "6vh";
    
        //
        document.getElementById("section-2").style.paddingBottom = "1%";
    
        // Add te
        sectionOneText.innerHTML = `<div class="answer" id="section-1-answer"></div>`;
        sectionThreeText.innerHTML = `<div class="answer" id="section-3-answer"></div>`;

        setTimeout(function(){
            sectionTwoText.innerHTML = `
            <hr/>
            <div class="answer-text"><p>
                ${text[1].answer}
            </p></div>`;
        }, 65);
        
        clickedA = true;
        clickedB = false;
        clickedC = true;
    }
    else{
        document.getElementById("section-2-box").style.height = "6vh";
        sectionTwoText.innerHTML = `<div class="answer" id="section-2-answer"></div>`;
        document.getElementById("section-2-click-icon").src = "plus.jpg";
        clickedB = true;
    }

})

sectionThreeOpenElement.addEventListener("click", ()=>{

    if(clickedC){
        document.getElementById("section-1-click-icon").src = "plus.jpg";
        document.getElementById("section-2-click-icon").src = "plus.jpg";
        document.getElementById("section-3-click-icon").src = "minus.jpg";
    
        document.getElementById("section-1-box").style.height = "6vh";
        document.getElementById("section-2-box").style.height = "6vh";
        document.getElementById("section-3-box").style.height = "14vh";
    
        sectionOneText.innerHTML = `<div class="answer" id="section-1-answer"></div>`;
        sectionTwoText.innerHTML = `<div class="answer" id="section-2-answer"></div>`;

        setTimeout(function(){
            sectionThreeText.innerHTML = `
            <hr/>
            <div class="answer-text"><p>
                ${text[2].answer}
            </p></div>`;
        }, 120);

        clickedA = true;
        clickedB = true;
        clickedC = false;
    }
    else{
        document.getElementById("section-3-box").style.height = "6vh";
        sectionThreeText.innerHTML = `<div class="answer" id="section-3-answer"></div>`;
        document.getElementById("section-3-click-icon").src = "plus.jpg";
        clickedC = true;
    }

})
