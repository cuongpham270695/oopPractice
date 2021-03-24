class Mobile {
    constructor(id, name, message, arrsendmess, arrreceivemess, arrcurrent) {
        this.id = id;
        this.message = message;
        this.name = name;
        this.arrsendmess = [];
        this.arrreceivemess = [];
        this.arrcurrent = [];
        this.battery = 100;
        this.status = true;
    }

    getStatus() {
        return this.status;
    }

    setStatus(value) {
        this.status = value;
        if (this.status === false) {
            console.log("Out of battery!");
        }
    }

    getBattery() {
        return this.battery;
    }

    writeMessage(message) {
        if (this.getStatus()) {
            this.arrcurrent.push(message);
            this.battery--;
        }
    }

    setMessage(message) {
        if (this.getStatus()) {
            this.message = message;
            this.battery--;
        }
    }

    getMessage() {
        if (this.getStatus()) {
            return this.message;
            this.battery--;
        }
    }

    sendMessage(message, obj) {
        if (this.getStatus()) {
            obj.setMessage(message);
            this.battery--;
        }
    }
    storeMessage(message,obj){
        if (this.getStatus()){
            obj.arrreceivemess.push(message);
            this.arrsendmess.push(message);
            obj.battery--;
            this.battery--;
        }
    }
    chargeBattery(){
        if (this.getStatus()){
            this.battery++;
        }else{
            console.log("Charge mobile now!");
        }
    }
}

var nokia = new Mobile(1, "nokia");
var ip_xsmax = new Mobile(2, "ip_xsmax");
nokia.setStatus(true);
ip_xsmax.setStatus(true);
console.log(nokia.status);
console.log(ip_xsmax.status);
nokia.sendMessage("hello", ip_xsmax);
var ip_xsmax_mess = ip_xsmax.getMessage();
console.log(ip_xsmax_mess);
console.log("Lượng pin còn lại của ip_xsmax: "+ip_xsmax.battery);
console.log("Lượng pin còn lại của nokia: "+nokia.battery);