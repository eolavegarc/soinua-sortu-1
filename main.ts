basic.forever(function () {
    if (input.soundLevel() < 30) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (input.soundLevel() < 30) {
        basic.showString("egun on")
    }
})
