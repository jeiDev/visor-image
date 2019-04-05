document.addEventListener("DOMContentLoaded", () => {
    let imgCanvas = document.getElementById("img")
    let paintCursor = document.getElementById("paintCursor")
    let contentImg = document.getElementById("contentImg")
    let paint = document.getElementById("paint")
    let height = 0
    let width = 0
    let ctx = imgCanvas.getContext("2d")
    let ctx2 = paintCursor.getContext("2d")
    let ctx3 = paint.getContext("2d")
    let img = new Image()

    img.src = "/img/image.jpg"

    img.onload = function(){
        if(img.width > img.height){
            width = 600
            height = (600 / img.width) * img.height
        }else{
            height = 600
            width = (600 / img.height) * img.width 
        }

        paintCursor.width = imgCanvas.width = width
        paintCursor.height = imgCanvas.height = height
        contentImg.style.width = `${width}px`

        ctx.drawImage(img, 0, 0, width, height)

        paintCursor.addEventListener("mousemove", (e) => {
            let x = e.clientX -95
            let y = e.clientY - 95
            let xI = e.clientX
            let yI = e.clientY

            if(x < 1) x = 1
            if(x > width - 100) x = width - 101
            if(y < 1) y = 1
            if(y > height - 100) y = height - 101

            ctx2.clearRect(0, 0, width, height)
            ctx2.fillRect(x, y, 100, 100)
            ctx2.fillStyle = "rgba(255,255,255,.2)"
            ctx2.filter = "blur(1px)"
            ctx2.strokeRect(x, y, 100, 100)
            ctx2.strokeStyle = "white"
            ctx3.clearRect(0, 0, 400, 400)
            ctx3.drawImage(imgCanvas, x, y, 100, 100, 0, 0, 400, 400)

        })
    }
}) 