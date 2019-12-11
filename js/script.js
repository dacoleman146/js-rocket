setTimeout(function () {
    location.href = 'rocket.html';
}, 2000);

function changeColor() {
    var currentClassName = document.getElementById('cool').className;

    // Changing Class Name
    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else { // Change back to initial cool
        document.getElementById('cool').className = 'cool';
    }

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