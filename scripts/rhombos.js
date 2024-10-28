function rhombosCalculate() {
    const rhombosD1 = getElementById('rhombus-d1')
    const rhombosD2 = getElementById('rhombus-d2')
    const area = 0.5 * rhombosD1 * rhombosD2
    rhombosAreaCalculation(area)
}

function rhombosAreaCalculation(value) {
    const areaCalculation = document.getElementById('area-calculation')
    const div = document.createElement('div')
    div.classList.add('flex')
    div.classList.add('justify-between')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerText = '3.' + ' Rhombos' + '- '
    p2.innerText = value
    p3.innerHTML = `
<span>cm<sup>2</sup></span>
`
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    areaCalculation.appendChild(div)
}
const rhombosHover = document.getElementById('rhombos-bg')
rhombosHover.addEventListener('mouseenter', function () {
    rhombosHover.style.backgroundColor = '#FFC1AC'
})