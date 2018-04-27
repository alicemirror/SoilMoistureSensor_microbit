let ALERT_LO = 0
let ALERT_HI = 0
let StatusMsg: string[] = []
let reading = 0
let StatusVal: number[] = []
input.onButtonPressed(Button.B, () => {
    led.plotBarGraph(
        reading,
        1023
    )
    basic.pause(2000)
    basic.showNumber(reading)
})
input.onButtonPressed(Button.A, () => {
    if (reading <= StatusVal[0]) {
        basic.showString(StatusMsg[0])
    } else {
        if (reading <= StatusVal[1]) {
            basic.showString(StatusMsg[1])
        } else {
            if (reading <= StatusVal[2]) {
                basic.showString(StatusMsg[2])
            } else {
                if (reading <= StatusVal[3]) {
                    basic.showString(StatusMsg[3])
                } else {
                    if (reading <= StatusVal[4]) {
                        basic.showString(StatusMsg[4])
                    } else {
                        if (reading <= StatusVal[5]) {
                            basic.showString(StatusMsg[5])
                        } else {
                            if (reading <= StatusVal[6]) {
                                basic.showString(StatusMsg[6])
                            }
                        }
                    }
                }
            }
        }
    }
})
led.setBrightness(64)
StatusVal = [250, 300, 350, 600, 899, 950, 1023]
StatusMsg = ["Muy Seca ", "Seca ", "Quiero Agua ", "Alerta ", "Normal", "Humedo", "Mojado"]
ALERT_HI = 899
ALERT_LO = 500
reading = pins.analogReadPin(AnalogPin.P2)
control.inBackground(() => {
    while (true) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        reading = pins.analogReadPin(AnalogPin.P0)
        pins.analogWritePin(AnalogPin.P1, 0)
        if (reading <= ALERT_LO) {
            basic.showArrow(ArrowNames.South)
        } else {
            if (reading >= ALERT_HI) {
                basic.showArrow(ArrowNames.North)
            }
        }
        basic.pause(5000)
    }
})

