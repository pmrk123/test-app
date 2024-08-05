const asyncHandler = require('express-async-handler');
const { validatorClient, aliceClient, fredClient } = require('./setup.js');
const { VALIDATOR_ADDRESS, FRED_ADDRESS, ALICE_ADDRESS } = require('../env.js');

const transfer = asyncHandler(async (req, res) => {
    const { sender, recipient, amount } = req.query;
    let client;
    switch (sender) {
        case VALIDATOR_ADDRESS:
            client = await validatorClient();
            break;
        case ALICE_ADDRESS:
            client = await aliceClient();
            break;
        case FRED_ADDRESS:
            client = await fredClient();
            break;
        default:
            console.error("Invalid source:", sender);
            res.status(400).json({ success: false, message: 'Invalid source account' });
            return;
    }
    await client.transfer({ sender, recipient, amount });
    res.json({ success: true, message: 'transferred successfully!' });
});

const burn = asyncHandler(async (req, res) => {
    const { amount } = req.query;
    await (await validatorClient()).burn({ amount });
    res.json({ success: true, message: 'burned successfully!' });
});

const send = asyncHandler(async (req, res) => {
    const { contract, amount, msg } = req.query;
    await (await validatorClient()).send({ contract, amount, msg });
    res.json({ success: true, message: 'sent successfully!' });
});

const mint = asyncHandler(async (req, res) => {
    const { recipient, amount } = req.query;
    await (await validatorClient()).mint({ recipient, amount });
    res.json({ success: true, message: 'minted successfully!' });
});

const balance = asyncHandler(async (req, res) => {
    const { address } = req.query;
    const client = await validatorClient();
    const result = await client.balance({ address });
    res.json(result);
});

module.exports = {
    transfer,
    burn,
    send,
    mint,
    balance
};
