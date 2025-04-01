// input button is used to extract value
const input = document.getElementById("input");

// when button is clicked value is taken from input
const create = document.getElementById("create");

//container that collects all the colors
const hexBtns =  document.getElementById("hex-btns")

// all color buttons
const elements = document.getElementsByClassName("color-btn");

// background display
const bgDisplay = document.getElementById("bg-display")

create.addEventListener("click",()=>{
    //get the value from input box
    let value = input.value;

    //if # is not present add it in front
    if(value[0]!='#'){
        value="#"+value;
    }

    // create a div element
    const div = document.createElement("div");

    //place name on div
    div.innerHTML=value;

    //set background color to given color
    div.style.backgroundColor=value;

    //add class to apply properties on div
    div.classList.add("color-btn");

    //add eventlistener to div
    div.addEventListener("click",(e)=>{
        // when clicked background change 
        bgDisplay.style.backgroundColor=e.target.innerHTML;
    })

    //append div inside the container
    hexBtns.appendChild(div);

    input.value=""

})

