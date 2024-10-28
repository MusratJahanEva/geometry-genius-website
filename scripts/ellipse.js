function ellipseCalculate() {
    const minor = getElementById('ellipse-minor')
    const major = getElementById('ellipse-major')
    const area = 3.1416 * minor * major
    ellipseAreaCalculation(area)
}

function ellipseAreaCalculation(value) {
    const areaCalculation = document.getElementById('area-calculation')
    const div = document.createElement('div')
    div.classList.add('flex')
    div.classList.add('justify-between')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerText = '6.' + 'Ellipse' + '-'
    p2.innerText = value
    p3.innerHTML = `
    <span>cm<sup>2</sup></span>
    `
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    areaCalculation.appendChild(div)
}

const ellipseHover = document.getElementById('ellipse-bg')
ellipseHover.addEventListener('mouseenter', function () {
    ellipseHover.style.backgroundColor = '#B2F069'
})