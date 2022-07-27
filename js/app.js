const container = document.querySelector('.gridContainer');
const btnNewGrid = document.querySelector('.newGrid');
const btnReset = document.querySelector('.reset')
let divs = '';
let divsNumber = 0;

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
            e.target.style.backgroundColor= 'black';
        })
    })
}

appendDivs()

btnNewGrid.addEventListener('click',(e)=>{
    let grid = prompt('Please enter the squares per side that you want in the new grid, a number minor than 100');
    container.innerHTML = '';
    appendDivs(grid);
})

btnReset.addEventListener('click',e=>{
    container.innerHTML = '';
    appendDivs();
})

