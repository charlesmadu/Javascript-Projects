let idNumber = 0;

let employees = [
    {
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        name: "Susan Smith",
        job: "Web Developer",
        paragrpah: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        name: "Anna Johnson",
        job: "Web Designer",
        paragrpah: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",

    },
    {
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name: "Peter Jones",
        job: "Intern",
        paragrpah: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        name: "Bill Anderson",
        job: "The Boss",
        paragrpah: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    }
];


const leftButtonElement = document.querySelector("#left-button");
const rightButtonElement = document.querySelector("#right-button");
const imageElement = document.querySelector("#image");
const nameElement = document.querySelector("#name");
const jobElement = document.querySelector("#job");
const paragraphElement = document.querySelector("#paragraph");
const supriseButton = document.querySelector("#suprise-button");


const render = (employeeID) => {
    imageElement.src = employees[employeeID].image;
    nameElement.textContent = employees[employeeID].name;
    jobElement.textContent = employees[employeeID].job;
    paragraphElement.textContent = employees[employeeID].paragrpah;
}

rightButtonElement.addEventListener("click", () => {
    (idNumber == 3) ? idNumber = 0 : idNumber++;
    render(idNumber)
})

leftButtonElement.addEventListener("click", () => {
    (idNumber == 0) ? idNumber = 3 : idNumber--;
    render(idNumber)
})

supriseButton.addEventListener("click" , () =>{
    idNumber = Math.floor(Math.random() * 4)
    render(idNumber)
})

render(idNumber)