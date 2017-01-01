
module.exports = function(RED) {

   "use strict";    

    function FreeboxConfigNode(config) {
        RED.nodes.createNode(this, config);
        this.host = config.host;
        this.port = config.port;
        this.app_token = config.app_token;
        this.session_token = null;

        var node = this;
        this.on('close', function(done) {
            done();   
        });
    }
    RED.nodes.registerType("freebox-config", FreeboxConfigNode);

}

