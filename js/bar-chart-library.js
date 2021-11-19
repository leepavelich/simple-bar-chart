const drawBarChart = (data, options, element) => {
  // TODO set defaults with Object.align() method
  const x = 'width' in options ? options.width : 400
  const y = 'height' in options ? options.height : 400
  const color = 'color' in options ? options.color : 'DeepSkyBlue'
  const spacing = 'spacing' in options ? options.spacing : 15
  const xLabel = 'xLabel' in options ? options.xLabel : 'x'
  const yLabel = 'yLabel' in options ? options.yLabel : 'y'
  const title  = 'title' in options ? options.title : 'Title'
  const titleColor = 'titleColor' in options ? options.titleColor : 'Black'
  const titleSize = 'titleSize' in options ? options.titleSize : 24

  const offsetX = 100
  const offsetY = 400
  // const colNum   = data.length
  const barWidth = x / data.length

  let canvas = document.getElementById(element);
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight/2


  for (let i = 0; i < data.length; i++) {
    drawBox(offsetX + i*barWidth + spacing, offsetY, barWidth - spacing, data[i]*offsetY/10, element, color)
  }

  drawAxes([offsetX, offsetY], x, y, xLabel, yLabel, element)
  drawTitle([offsetX, offsetY], x, y, title, titleColor, titleSize, element)
}

const drawBox = (offsetX, offsetY, x, y, element, color, outline=false) => {
  let canvas = document.getElementById(element)

  let ctx = canvas.getContext("2d")
  ctx.beginPath();
  ctx.rect(offsetX, offsetY, x, -y)
  ctx.lineWidth = 2
  if (outline === 'true') ctx.stroke()
  ctx.fillStyle = color;
  ctx.fill();
}

const drawAxes = (origin, width, height, xLabel, yLabel, element) => {
  let ctx= document.getElementById(element).getContext("2d")

  ctx.font = '20px Arial'
  ctx.fillStyle = 'black'

  ctx.textAlign = 'center'
  ctx.fillText(xLabel, origin[0] + width/2, origin[1] + 40)
  ctx.textAlign = 'end'
  ctx.fillText(yLabel, origin[0] - 30, origin[1]/2)

  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(origin[0], origin[1]);
  ctx.lineTo(origin[0], origin[1] - height)
  ctx.moveTo(origin[0], origin[1]);
  ctx.lineTo(origin[0] + width, origin[1])
  ctx.stroke()
}

const drawTitle = (origin, width, height, title, titleColor, titleSize, element) => {
  let ctx= document.getElementById(element).getContext("2d")

  ctx.font = `${titleSize}px Arial`
  ctx.fillStyle = titleColor

  ctx.textAlign = 'center'
  ctx.fillText(title, origin[0] + width/2, origin[1] - height + 40)
}
