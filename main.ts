buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    basic.showIcon(IconNames.Heart)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
    basic.clearScreen()
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    basic.showIcon(IconNames.No)
    datalogger.deleteLog(datalogger.DeleteType.Fast)
    basic.clearScreen()
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    game.addScore(1)
    datalogger.log(
    datalogger.createCV("x", input.acceleration(Dimension.X)),
    datalogger.createCV("y", input.acceleration(Dimension.Y)),
    datalogger.createCV("z", input.acceleration(Dimension.Z))
    )
})
blelog.startBLELogService()
basic.showIcon(IconNames.Happy)
datalogger.setColumnTitles(
"x",
"y",
"z"
)
basic.forever(function () {
    game.addScore(1)
    datalogger.log(
    datalogger.createCV("x", input.acceleration(Dimension.X)),
    datalogger.createCV("y", input.acceleration(Dimension.Y)),
    datalogger.createCV("z", input.acceleration(Dimension.Z))
    )
    basic.pause(1000)
})
