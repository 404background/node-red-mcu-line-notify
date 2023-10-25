module.exports = function(RED) {
    function mcu_linenotify(config) {
        var node = this;
        RED.nodes.createNode(this,config);
        this.AccessToken = config.AccessToken;
        let LINE_TOKEN = node.AccessToken;
        node.on('input', function(msg) {
            msg.headers={
                'Authorization': `Bearer ${LINE_TOKEN}`
            };
            msg.url=`https://notify-api.line.me/api/notify?message=${encodeURI(msg.payload)}`;
            node.send(msg);
        });
    }
    RED.nodes.registerType("mcu_linenotify", mcu_linenotify);
}
