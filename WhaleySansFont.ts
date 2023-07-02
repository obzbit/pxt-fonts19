/**
* makecode WhaleySans Font Package.
* From microbit/micropython Chinese community.
* http://www.micropython.org.cn
*/

//% weight=100 color=#cc1280 icon="F" block="WhaleySans19"
namespace whaleysans {
    let FONT = [
        [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
    ]
    let img: Image = null
    img = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

    /**
     * show a number (up to 19)
     * @param dat is number will be show, eg: 10
     */
    //% blockId="show_whaleysans_number" block="show a whaleysans number %dat"
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
            //let a = FONT[Math.idiv(dat, 10) % 10];
            let b = FONT[dat % 10];

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
                img.setPixel(2, i, 1 == b[i * 3])
                img.setPixel(3, i, 1 == b[i * 3 + 1])                
                img.setPixel(4, i, 1 == b[i * 3 + 2])
            }
            img.showImage(0, 10);
        }
    }
}
