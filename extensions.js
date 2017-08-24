(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.dummy = function() {
    };

    ext.toBinary = function(number) {
        return parseInt(number,10).toString(2);
    };

    ext.getTemperature = function(city, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://weathers.co/api.php?city="+city, true);
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                callback(myObj.data.temperature);
            }
        };
        xmlhttp.send();
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'Dummy block', 'dummy'],
            ['r', 'binary %n', 'toBinary', 1],
            ['R', 'current temperature in city %s', 'getTemperature', 'Boston'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Scratch 2017', descriptor, ext);
})({});