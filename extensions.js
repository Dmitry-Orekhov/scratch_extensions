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

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'Dummy block', 'dummy'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Scratch 2017', descriptor, ext);
})({});