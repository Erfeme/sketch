body = document.querySelector('body');
const container = document.querySelector('.gridContainer');

appendDivs=div=>{

    for (i = 0; i < 16 ; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }

}

appendDivs()