/**
* Modified from makecode WhaleySans Font Package.
* From microbit/micropython Chinese community.
* http://www.micropython.org.cn
*/

enum FontFace {
    //% block="Default"
    DEFAULT = 0,
    //% block="Digital"
    DIGITAL = 1,
    //% block="Prop."
    PROP = 2
}

//% weight=100 color=#cc1280 icon="F" block="Fonts19"
namespace fonts19 {
    let FONT = [[
		[0,1,1,1, 0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,1,1],
        [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        [0,1,1,1, 0,0,0,1, 0,0,1,0, 0,1,0,0, 0,1,1,1],
        [0,1,1,1, 0,0,0,1, 0,0,1,0, 0,0,0,1, 0,1,1,1],
        [0,0,0,1, 0,1,0,1, 0,1,1,1, 0,0,0,1, 0,0,0,1],
        [0,1,1,1, 0,1,0,0, 0,0,1,0, 0,0,0,1, 0,1,1,1],
        [0,0,1,1, 0,1,0,0, 0,1,1,1, 0,1,0,1, 0,1,1,1],
        [0,1,1,1, 0,0,0,1, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        [0,0,1,1, 0,1,0,1, 0,0,1,0, 0,1,0,1, 0,1,1,1],
        [0,0,1,1, 0,1,0,1, 0,1,1,1, 0,0,0,1, 0,1,1,1]
    ],[
        [0,1,1,1, 0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,1,1],
        [0,0,0,1, 0,0,0,1, 0,0,0,1, 0,0,0,1, 0,0,0,1],
        [0,1,1,1, 0,0,0,1, 0,1,1,1, 0,1,0,0, 0,1,1,1],
        [0,1,1,1, 0,0,0,1, 0,1,1,1, 0,0,0,1, 0,1,1,1],
        [0,1,0,1, 0,1,0,1, 0,1,1,1, 0,0,0,1, 0,0,0,1],
        [0,1,1,1, 0,1,0,0, 0,1,1,1, 0,0,0,1, 0,1,1,1],
        [0,1,1,1, 0,1,0,0, 0,1,1,1, 0,1,0,1, 0,1,1,1],
        [0,1,1,1, 0,0,0,1, 0,0,0,1, 0,0,0,1, 0,0,0,1],
        [0,1,1,1, 0,1,0,1, 0,1,1,1, 0,1,0,1, 0,1,1,1],
        [0,1,1,1, 0,1,0,1, 0,1,1,1, 0,0,0,1, 0,1,1,1]
	],[
        [0,0,1,0, 0,1,0,1, 0,1,0,1, 0,1,0,1, 0,0,1,0],
        [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        [0,0,1,0, 0,1,0,1, 0,0,0,1, 0,0,1,0, 0,1,1,1],
        [0,1,1,0, 0,0,0,1, 0,0,1,0, 0,0,0,1, 0,1,1,0],
        [0,0,1,0, 0,1,1,0, 1,0,1,0, 1,1,1,1, 0,0,1,0],
        [0,1,1,1, 0,1,0,0, 0,1,1,0, 0,0,0,1, 0,1,1,0],
        [0,0,1,1, 0,1,0,0, 0,1,1,0, 0,1,0,1, 0,0,1,0],
        [0,1,1,1, 0,0,0,1, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        [0,0,1,0, 0,1,0,1, 0,0,1,0, 0,1,0,1, 0,0,1,0],
        [0,0,1,0, 0,1,0,1, 0,0,1,1, 0,0,0,1, 0,1,1,0]
	]]
    let fontID = 0
    let img: Image = null
    img = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

    /**
     * Change the font face
     * @param fontFace Font face to use
     */
    //% block="change font face"
    //% weight=100
    export function changeFont(fontFace: FontFace): void {
        switch (fontFace) {
            case FontFace.DEFAULT:
                fontID = 0
                break
            case FontFace.DIGITAL:
                fontID = 1
                break
            case FontFace.PROP:
                fontID = 2
                break
            default:
                break
        }
    }
    
    /**
     * show a number (up to 19)
     * @param dat is number will be show, eg: 10
     */
    //% block="show a number (0-19) %dat"
    //% dat.min=0 dat.max=99
    export function showNumber(dat: number): void {
        if (dat < 0)
            dat = 0;

        if (dat > 19) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `, 10)
        }
        else {
            //let a = FONT[fontID][Math.idiv(dat, 10) % 10];
            let b = FONT[fontID][dat % 10];

            if (dat < 10) {
                for (let i = 0; i < 5; i++) {
                    img.setPixel(0, i, false)
                }
            }
            if (dat >= 10) {
                for (let i = 0; i < 5; i++) {
                    img.setPixel(0, i, true)
                }
            }

            for (let i = 0; i < 5; i++) {
                img.setPixel(1, i, 1 == b[i * 4])
                img.setPixel(2, i, 1 == b[i * 4 + 1])
                img.setPixel(3, i, 1 == b[i * 4 + 2])
                img.setPixel(4, i, 1 == b[i * 4 + 3])
            }
            img.showImage(0, 10);
        }
    }
}
