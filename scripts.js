const container = document.querySelector('.grid-container')


for(let i = 0; i < 256; i++){
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    // const element = document.querySelector('.grid-element')
    // element.textContent += 'something'
    container.appendChild(gridElement)
}


const divs = document.querySelectorAll('.grid-element')

// divs.forEach(div => div.textContent += 'something');

divs.forEach(div => div.addEventListener('mouseover', function(e) {
    console.log(e)
    div.classList.add('hover-effect')
}))

function resetPrompt() {
    const gridSize = prompt('How big would you like the grid?')
    console.log(gridSize)
    
    divs.forEach(function(div) {
        div.classList.remove('hover-effect');
        const gridWidths = (95/gridSize)

        console.log(gridWidths)
        
        div.setAttribute("style",`width: ${gridWidths}%`);

    })

}
