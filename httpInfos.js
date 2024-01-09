module.exports = function (RED) {
    "use strict";
    RED.httpNode.get("/http-api/nodes-json", (req, res) => {
        const nodesInfos = [];
        RED.nodes.eachNode(node => {
            if (node.type === "http in") {
                nodesInfos.push({
                    id: node.id,
                    path: node.url,
                    method: node.method,
                });
            }
        });
        res.status(200).json(nodesInfos);
    });
};
