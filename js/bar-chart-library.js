const drawBarChart = (data, options, element) => {
  const x = 'width' in options ? options.width : 400
  const y = 'height' in options ? options.height : 400
  const color = 'color' in options ? options.color : 'blue'
  const spacing = 'spacing' in options ? options.spacing : 0
  const xLabel = 'xLabel' in options ? options.xLabel : 'x'
  const yLabel = 'yLabel' in options ? options.yLabel: 'y'

  const offsetX = 20
  const offsetY = 400
  const colNum   = data.length
  const barWidth = x / data.length

  let canvas = document.getElementById(element);
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight/2

  drawAxes([offsetX, offsetY], x, y, element)

  for (let i = 0; i < data.length; i++) {
    drawBox(offsetX + i*barWidth + spacing, offsetY, barWidth - spacing, data[i]*offsetY/10, element, color)
  }
}

const drawBox = (offsetX, offsetY, x, y, element, color) => {
  let canvas = document.getElementById(element);
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(offsetX, offsetY, x, -y);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}

const drawAxes = (origin, width, height, element) => {
  let ctx= document.getElementById(element).getContext("2d")
  ctx.beginPath()
  ctx.moveTo(origin[0], origin[1]);
  ctx.lineTo(origin[0], origin[1] - height)

  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(origin[0], origin[1]);
  ctx.lineTo(origin[0] + width, origin[1])
  ctx.stroke()
}
