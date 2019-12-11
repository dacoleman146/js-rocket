function sayMyName(name) {
    alert('My name is ' +  name);
}


var car = {
    make: 'Dodge',
    model: 'Charger',
    color: 'black',
    isTurnedOn: false,
    year: 2016,
    seats: [
        'seat 1', 
        'seat 2', 
        'seat 3', 
        'seat 4'
    ],

    turnOn: function() {
        this.isTurnedOn = true;
    },
    fly: function() {
        alert('Car is flying!!');
    },
    switchCar: function(isOn) {
        console.log('turn car ' + isOn);
        if(isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
};

console.log('hello there friends!');