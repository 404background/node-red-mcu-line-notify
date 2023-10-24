module.exports = function(RED) {
    function McuLineNotifyNode(config) {
        var node = this;
        RED.nodes.createNode(this,config);
        const LINE_TOKEN = node.credentials.AccessToken;
        const token = {
            'Authorization': `Bearer ${LINE_TOKEN}`
        }
        node.on('input', function(msg) {
            msg.headers=token;
            msg.url=`https://notify-api.line.me/api/notify?message=${encodeURI(msg.payload)}`;
            node.send(msg);
        });
    }
    RED.nodes.registerType("mcu_linenotify", McuLineNotifyNode, {
        credentials: {
            AccessToken: {type:"password"}
        }
    });
}
