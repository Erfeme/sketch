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

    divsNumber= element * element;
    
    for (i = 0; i < divsNumber ; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }

    let frNumb = ''
    for(i=0; i<element; i++){
        frNumb += ' 1fr'
    }

    container.style.gridTemplateColumns= frNumb;
    container.style.gridTemplateRows=frNumb;
    divs = document.querySelectorAll('.pixel');
    
    divs.forEach(item=>{
        item.addEventListener('mouseover',e=>{
            e.stopPropagation();
            if(rainbow==false){
            e.target.style.backgroundColor= selectedColor;
            } else if(rainbow ==true){
            e.target.style.backgroundColor= '#' + Math.floor(Math.random()*16777215).toString(16);              
            }
        })
    })
}

appendDivs()

btnNewGrid.addEventListener('click',(e)=>{
    let grid = prompt('Ingresa el numero de cuadros por lado que quieres en tu nuevo lienzo (Menor a 100)');
    grid =parseInt(grid);
    console.log(typeof grid)
    console.log(grid)
    if (grid > 100 || Number.isNaN(grid)){
        alert("Por favor introduzca un parametro válido (Un número positivo menor a 100)")
    }else{
        container.innerHTML = '';
        appendDivs(grid);
    }
    
})

btnReset.addEventListener('click',e=>{
    container.innerHTML = '';
    appendDivs();
})

color.addEventListener('change',e=>{
    selectedColor = color.value;
    console.log(selectedColor);
})

rainbowButton.addEventListener('click',e=>{
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