module.exports = function (RED) {
    "use strict";
    RED.httpNode.get("/http-api/swagger.json", (req, res) => {
        const nodesInfos = [];
        RED.nodes.eachNode(node => {
            if (node.type === "http in") {
                nodesInfos.push({
                    path: node.url,
                    method: node.method,
                });
            }
        });
        res.json(nodesInfos);
    });
};