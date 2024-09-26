let car = {
    name: 'honda',
    color: 'xanh',

    running: function () {
        function test() {
            console.log(this);
        }
        return test;
    }
}
console.log(car.running()());