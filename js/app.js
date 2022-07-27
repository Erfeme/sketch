const container = document.querySelector('.gridContainer');
const btnNewGrid = document.querySelector('.newGrid');
const btnReset = document.querySelector('.reset');
const color = document.querySelector('.colorSelector');
const rainbowButton = document.querySelector('.rainbow');
let selectedColor= '#000000';
let divs = '';
let divsNumber = 0;
let rainbow = false;

appendDivs=(element=4)=>{                                       //Function that appends as much divs as desired, initially 16 if not element passed

    divsNumber= element * element;                              //Takes the selected number(default 4) and multiples it by itself
                                                                //To get the total divs to make
    for (i = 0; i < divsNumber ; i++){                          //Make the divs and append each one with the class 'pixel'
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }

    let frNumb = ''                                             //Auxiliar for the rows and columns operation
    for(i=0; i<element; i++){                                   //For each side add 1fr, referring to the columns and rows that the new item will have
        frNumb += ' 1fr'
    }

    container.style.gridTemplateColumns= frNumb;                //Add number of columns
    container.style.gridTemplateRows=frNumb;                    //Add number of rows
    divs = document.querySelectorAll('.pixel');                 //Select all the made divs
    
    divs.forEach(item=>{                                        //Add a function to each one to detect the mouse hovering on them
        item.addEventListener('mouseover',e=>{
            e.stopPropagation();
            if(rainbow==false){                                 //When the mouse hover over change it color depending on two parameters
            e.target.style.backgroundColor= selectedColor;      //If the rainbow button its disabled change the pixel color to the selected color via the input color
            } else if(rainbow ==true){                          //If the rainbow button its enabled change the color to a random color
            e.target.style.backgroundColor= '#' + Math.floor(Math.random()*16777215).toString(16);              
            }
        })
    })
}

appendDivs()

btnNewGrid.addEventListener('click',(e)=>{                                      //Function that checks if the button for a new grid has ben pressed
    let grid = prompt('Ingresa el numero de cuadros por lado que quieres en tu nuevo lienzo (Menor a 100)');    //Prompt for data of a new grid
    grid =parseInt(grid);                                                       //Transform that data into a number
    if (grid > 100 || Number.isNaN(grid)){                                      //Check if the number is larger than 100 or is not a number
        alert("Por favor introduzca un parametro válido (Un número positivo menor a 100)") //If incorrect data has been inputed send an alert
    }else{                                                                      //If the number computes proced with the grid creation
        container.innerHTML = '';
        appendDivs(grid);
    }
    
})

btnReset.addEventListener('click',e=>{                  //Reset the grid
    container.innerHTML = '';
    appendDivs();
})

color.addEventListener('change',e=>{                    //Change the color for the normal brush
    selectedColor = color.value;
})

rainbowButton.addEventListener('click',e=>{             //Enables or disables the rainbow mod
    if(rainbow == true){
        rainbow = false;
        rainbowButton.innerText = "Rainbow Off"
        rainbowButton.classList.remove('rainbowAnimation')
    }else if(rainbow == false){
        rainbow = true;
        rainbowButton.classList.add('rainbowAnimation')
        rainbowButton.innerText = "Rainbow On!"
    }
})