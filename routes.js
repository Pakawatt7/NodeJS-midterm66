const CalculateController = require("./src/calculatecontroller/calcontroller")

module.exports = (app) => {
    app.post('/que1',CalculateController.do1)
    app.post('/que2',CalculateController.do2)
}