function pentagonCalculate() {
    const pentagonP = getElementById('pentagon-p');
    const pentagonBase = getElementById('pentagon-base')
    const area = 0.5 * pentagonP * pentagonBase
    pentagonAreaCalculation(area)
}
function pentagonAreaCalculation(value) {
    const areaCalculation = document.getElementById('area-calculation')

    const div = document.createElement('div')
    div.classList.add('flex')
    div.classList.add('justify-between')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerText = '4.' + 'Pentagon' + '- '
    p2.innerText = value
    p3.innerHTML = `
<span>cm<sup>2</sup></span>
`
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    areaCalculation.appendChild(div)
}

const pentagonHover = document.getElementById('pentagon-bg')
pentagonHover.addEventListener('mouseenter', function () {
    pentagonHover.style.backgroundColor = '#CCF'

})