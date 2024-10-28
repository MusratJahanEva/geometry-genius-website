function triangleCalculate() {
    const base = getElementById('triangle-base')
    const height = getElementById('triangle-height')
    const area = 0.5 * base * height
    triangleAreaCalculation(area)
}

function triangleAreaCalculation(value) {
    const areaCalculation = document.getElementById('area-calculation')
    const div = document.createElement('div')
    div.classList.add('flex')
    div.classList.add('justify-between')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerText = '1.' + 'Triangle' + '-'
    p2.innerText = value
    p3.innerHTML = `
    <span>cm<sup>2</sup></span>
    `


    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    areaCalculation.appendChild(div)

}

const triangleHover = document.getElementById('triangle-bg')
triangleHover.addEventListener('mouseenter', function () {
    triangleHover.style.backgroundColor = '#FBBCED'
})