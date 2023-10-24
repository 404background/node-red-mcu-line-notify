module.exports = function(RED) {
    function McuLineNotifyNode(config) {
        var node = this;
        RED.nodes.createNode(this,config);
        let LINE_TOKEN = this.AccessToken;
        node.on('input', function(msg) {
            msg.headers={
                'Authorization': `Bearer ${LINE_TOKEN}`
            };
            msg.url=`https://notify-api.line.me/api/notify?message=${encodeURI(msg.payload)}`;
            node.send(msg);
        });
    }
    RED.nodes.registerType("mcu_linenotify", McuLineNotifyNode);
}
