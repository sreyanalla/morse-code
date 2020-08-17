basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.clearScreen()
    }
    
})
