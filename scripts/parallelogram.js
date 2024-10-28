function parallelogramCalculate() {
    const base = getElementById('parallelogram-base')
    const height = getElementById('parallelogram-height')
    const area = base * height
    parallelogramAreaCalculation(area)

}
function parallelogramAreaCalculation(value) {
    const areaCalculation = document.getElementById('area-calculation');
    const div = document.createElement('div')
    div.classList.add('flex')
    div.classList.add('justify-between')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerText = '3.' + 'Parallelogram' + '-'
    p2.innerText = value
    p3.innerHTML = `
    <span>cm<sup>2</sup></span>
    `
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    areaCalculation.appendChild(div)
}
const parallelogramHover = document.getElementById('parallelogram-bg')
parallelogramHover.addEventListener('mouseenter', function () {
    parallelogramHover.style.backgroundColor = '#69C7F0'
})