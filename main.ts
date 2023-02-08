input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 128) {
        basic.showLeds(`
            . # # # .
            # # # . .
            # # . . .
            # # # . .
            . # # # .
            `)
    } else if (input.lightLevel() > 128) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
