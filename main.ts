input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    radio.sendString("stop")
})
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("langsamer")
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendString("zurück")
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("schneller")
})
let r = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
radio.setGroup(179)
basic.forever(function () {
    r = 180 * Math.atan2(input.acceleration(Dimension.Y), -1 * input.acceleration(Dimension.X)) - 90
    r = Math.constrain(r, -45, 45)
    radio.sendNumber(r)
})
