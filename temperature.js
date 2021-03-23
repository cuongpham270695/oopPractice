function Temperature(celsius) {
    this.celsius = celsius;

    this.changeTemperatureF = function () {
        this.changeTemperatureF = (((9/5)* this.celsius) + 32);
        return this.changeTemperatureF;
    };
    this.changeTemperatureK = function () {
        this.changeTemperatureK = this.celsius + 273.15;
        return this.changeTemperatureK;
    };
}
let temperature = new Temperature(10);
function change(){
    let changeF = temperature.changeTemperatureF();
    let changeK = temperature.changeTemperatureK();
    document.write(temperature.celsius+" độ C bằng "+ changeF +" độ F <br/>");
    document.write(temperature.celsius+" độ C bằng "+ changeK +" độ K");
}
change();