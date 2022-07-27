const container = document.querySelector('.gridContainer');
let divs = ''

appendDivs=(element=16)=>{                                       //Function that appends as much divs as desired, initially 16 if not element passed

    for (i = 0; i < 16 ; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }
    divs = document.querySelectorAll('.pixel');
}

appendDivs()

