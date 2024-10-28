function rectangleCalculate() {
    const width = getElementById('rectangle-width')
    const length = getElementById('rectangle-length')
    const area = width * length
    rectangleAreaCalculation(area)

}
function rectangleAreaCalculation(value) {
    const areaCalculation = document.getElementById('area-calculation');
    const div = document.createElement('div')
    div.classList.add('flex')
    div.classList.add('justify-between')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerText = '2.' + 'Rectangle' + '-'
    p2.innerText = value
    p3.innerHTML = `
    <span>cm<sup>2</sup></span>
    `
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    areaCalculation.appendChild(div)
}
const rectHover = document.getElementById('rectangle-bg')
rectHover.addEventListener('mouseenter', function () {
    rectHover.style.backgroundColor = '#1090D81A'
})