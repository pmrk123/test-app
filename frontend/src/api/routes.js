const express = require('express');
const cors = require('cors');  
const router = express.Router(); 

const {
    transfer,
    burn,
    send,
    mint,
    balance
    // increaseAllowance,
    // decreaseAllowance,
    // transferFrom,
    // burnFrom,
    // sendFrom,
    // updateMarketing,
    // updateMinter,
} = require('./controller.js'); // Correct import

router.use(cors());

router.route('/').get((req, res) => {
    const endpoints = {
        'POST   /transfer': { 
            Desc: 'transfer tokens from recipient of value amount',
            Parameters: { "sender":"abc", "recipient":"abc", "amount":"1000000"}
        },
        'POST   /burn': { 
            Desc: 'burn the tokens of specified amount',
            Parameters: { "amount": "1000000"}
        },
        'POST   /send': { 
            Desc: '',
            Parameters: {"contract":"contractAddress", "amount":"1000000", "msg":"any msg"}
        },
        'POST   /mint': { 
            Desc: 'mint tokens of value amount for specified recipient',
            Parameters: { "recipient":"abc", "amount":"1000000"}
        },
        'GET   /balance': { 
            Desc: 'print balance',
            Parameters: { "address":"address"}
        }
        // 'POST   /increase-allowance': { Desc: '',
        // Parameters: {"spender":"spenderAddress", "amount":"1000000", "expires":"expiry date"}},
        // 'POST   /decrease-allowance': { Desc: '',
        // Parameters: { "spender":"spenderAddress", "amount":"1000000", "expires":"expiry date"}},
        // 'PUT    /transfer-from': { Desc: '',
        // Parameters: { "owner":"owner address", "recipient":"recipient address", "amount":"1000000"}},
        // 'POST   /burn-from': { Desc: '',
        // Parameters: { "owner":"owner address", "amount":"1000000"}},
        // 'POST   /send-from': { Desc: '',
        // Parameters: { "onwer":"owner address", "contract": "contract address", "amount":"amount", "msg":"any msg"}},
        // 'POST   /update-marketing': { Desc: '',
        // Parameters: { "project":"project", "description":"desc", "marketing":"marketing"}},
        // 'POST   /update-minter': { Desc: '',
        // Parameters: { "new_minter": "new_minter"}},
    }
    res.status(200).json(endpoints);
});

// execute
router.route('/transfer').post(transfer);
router.route('/burn').post(burn);
router.route('/send').post(send);
router.route('/mint').post(mint);
// router.route('/increase-allowance').post(increaseAllowance);
// router.route('/decrease-allowance').post(decreaseAllowance);
// router.route('/transfer-from').post(transferFrom);
// router.route('/burn-from').put(burnFrom);
// router.route('/send-from').post(sendFrom);
// router.route('/update-marketing').post(updateMarketing);
// router.route('/update-minter').post(updateMinter);

// queries
router.route('/balance').get(balance);

module.exports = router;
