buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    basic.showIcon(IconNames.Heart)
    datalogger.log(
    datalogger.createCV("x", input.acceleration(Dimension.X)),
    datalogger.createCV("y", input.acceleration(Dimension.Y)),
    datalogger.createCV("z", input.acceleration(Dimension.Z))
    )
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
basic.showIcon(IconNames.Happy)
blelog.startBLELogService()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
basic.forever(function () {
    game.addScore(1)
    datalogger.log(
    datalogger.createCV("x", input.acceleration(Dimension.X)),
    datalogger.createCV("y", input.acceleration(Dimension.Y)),
    datalogger.createCV("z", input.acceleration(Dimension.Z))
    )
    basic.pause(1000)
})
