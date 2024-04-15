function grille () {
    for (let X = 0; X <= 10; X++) {
        lever()
        allerVers(X * 10, 20)
        baisser()
        allerVers(X * 10, 120)
        lever()
    }
    for (let X = 0; X <= 10; X++) {
        lever()
        allerVers(0, X * 10 + 20)
        baisser()
        allerVers(90, X * 10 + 20)
        lever()
    }
}
input.onButtonPressed(Button.A, function () {
    numDessin += 1
    if (numDessin > 3) {
        numDessin = 0
    }
    basic.showNumber(numDessin)
    basic.pause(100)
})
function croix () {
    lever()
    allerVers(40, 20)
    baisser()
    allerVers(40, 40)
    lever()
    allerVers(30, 30)
    baisser()
    allerVers(50, 30)
    lever()
    basic.pause(500)
}
function etoile () {
    lever()
    allerVers(20, 70)
    baisser()
    allerVers(60, 70)
    allerVers(10, 40)
    allerVers(50, 90)
    allerVers(50, 50)
    allerVers(20, 70)
    lever()
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    if (numDessin == 0) {
        losange()
    }
    if (numDessin == 1) {
        etoile()
    }
    if (numDessin == 2) {
        croix()
    }
    if (numDessin == 3) {
        grille()
    }
})
function lever () {
    angleP2 = Math.max(60, angleP2)
    servos.P2.setAngle(angleP2)
    basic.pause(500)
}
function baisser () {
    angleP2 = Math.min(10, angleP2)
    servos.P2.setAngle(angleP2)
    basic.pause(500)
}
function allerVers (versP0: number, versP1: number) {
    for (let index = 0; index <= pas; index++) {
        servos.P0.setAngle(angleP0 + index * ((versP0 - angleP0) / pas))
        servos.P1.setAngle(angleP1 + index * ((versP1 - angleP1) / pas))
        basic.pause(200)
    }
    angleP0 = versP0
    angleP1 = versP1
    basic.pause(500)
}
function losange () {
    lever()
    allerVers(30, 90)
    baisser()
    allerVers(30, 120)
    allerVers(45, 120)
    allerVers(45, 90)
    allerVers(30, 90)
    lever()
    basic.pause(500)
}
let pas = 0
let numDessin = 0
let angleP2 = 0
let angleP1 = 0
let angleP0 = 0
angleP0 = 0
angleP1 = 90
angleP2 = 60
numDessin = 0
pas = 20
basic.showNumber(numDessin)
lever()
allerVers(0, 90)
