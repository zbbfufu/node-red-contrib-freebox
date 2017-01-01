
module.exports = function(RED) {

   "use strict";    
    const util = require("util");
    const freebox = require('node-freeboxos'); 

    function FreeboxRrdNode(config) {
        RED.nodes.createNode(this,config);

        // state variables


        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();

            //msg.payload input contains rrd parameters

            // check session

            // call freebox rrd

            // get result

            // return formatted results
            node.send(msg);
        });
    }
    RED.nodes.registerType("freebox-rrd", FreeboxRrdNode);
}

