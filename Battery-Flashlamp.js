var Battery=function (energy,status) {
    this.energy=energy;
    this.status=true;

    this.setEnergy=function () {
        return this.energy;
    };
    this.getEnergy=function () {
        return this.energy;
    };
    this.decreaseEnergy=function () {
        if (this.energy>0)
        {
            this.energy--;
        }
    };
    this.light=function () {
        if (this.status){
            alert("light");
            this.energy--;
        } else {
            alert("not light");
        }
    };
    this.getStatus=function () {
        return this.status;
    };
    this.checkBattery=function () {
        if (this.status){
            alert("đang bật đèn")
        } else {
            alert("tắt đèn")
        }
    }
}
var flashLamp=new Battery(80,true);