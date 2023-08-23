function Calculate1(data1) {
    return data1 - 1;
}

function LCM(data1, data2) {
    let result = data1 * data2;
    return result
}

module.exports = {
    do1(req, res) {
        let input = req.body.input;
        if (typeof input == "number") {
            let cal = Calculate1(input);
            res.send(JSON.stringify(cal));
        } else {
            res.send("No");
        }
    },
    do2(req, res) {
        let input = req.body.input;
        if (typeof input == "number") {
            let cal = LCM(input);
            res.send(JSON.stringify(cal));
        } else {
            res.send("No");
        }
    }
}