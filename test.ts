let num = 0
fonts19.changeFont(FontFace.DEFAULT)
basic.forever(function () {
    num += 1
    fonts19.showNumber(num)
    basic.pause(200)
    if (num > 20) {
        num = 0
    }
})
