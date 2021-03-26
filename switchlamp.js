class SwitchButton {
    constructor(ElectricLamp) {
        this.status = false;
        this.lamp = ElectricLamp;
    };

    switchOnOff() {
        this.status = !this.status;
        this.lamp.turnOnOff();
    }
}

class ElectricLamp {
    constructor() {
        this.status = false;
    }

    turnOnOff() {
        this.status = !this.status;
    }
}

// Drama
const electricLamp = new ElectricLamp();
const switchButton = new SwitchButton(electricLamp);

for (let i = 0; i < 10; i++) {
    switchButton.switchOnOff();
    document.write(i);
    console.log(switchButton, electricLamp);
}