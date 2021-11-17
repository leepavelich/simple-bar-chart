const drawBarChart = (data, options, element) => {
  const x = options.width
  const y = options.height

  const offsetX = 20
  const offsetY = 400
  const colNum   = data.length
  const barWidth = x / data.length

  let canvas = document.getElementById(element);
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight/2

  drawAxes([offsetX, offsetY], x, y, element)

  for (let i = 0; i < data.length; i++) {
    drawBox(offsetX + i*barWidth, offsetY, barWidth, data[i]*offsetY/10, element)
  }
}

const drawBox = (offsetX, offsetY, x, y, element) => {
  let canvas = document.getElementById(element);
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(offsetX, offsetY, x, -y);
  ctx.stroke();
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
