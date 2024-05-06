import asyncHandler from 'express-async-handler';
import { validatorClient, aliceClient, fredClient} from './setup.js'
import {VALIDATOR_ADDRESS, FRED_ADDRESS, ALICE_ADDRESS } from '../env.js';



const transfer = asyncHandler(async (req, res) => {
   // const { source, recipient, amount } = req.body; // Access data from request body

    console.log("processing request");
    //console.log("received client: "+ source)

  

    //await aliceClient.transfer({ sender: source, recipient:recipient, amount:amount});
   const { sender, recipient, amount } = req.query;
   let client; // Declare client variable
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
           console.error("Invalid source:", source);
           res.status(400).json({ success: false, message: 'Invalid source account' });
           return;
   }
   console.log("***************source is : "+ sender)
    //const targetParsed = parseInt(target, 10);
    //console.log("processing request");
    await client.transfer({ sender:sender, recipient:recipient, amount:amount });
    console.log("processed request");
    res.json({ success: true, message: 'transferred successfully!' });
});

const burn = asyncHandler(async (req, res) => {
    const { amount } = req.query;
    //const targetParsed = parseInt(target, 10);
    await (await validatorClient()).burn({ amount:amount });
    res.json({ success: true, message: 'burned successfully!' });
});

const send = asyncHandler(async (req, res) => {
    const { contract, amount, msg} = req.query;
    //const targetParsed = parseInt(target, 10);
    await (await validatorClient()).send({ contract:contract, amount:amount , msg:msg});
    res.json({ success: true, message: 'sent successfully!' });
});

const mint = asyncHandler(async (req, res) => {
    const { recipient, amount } = req.query;
    //const targetParsed = parseInt(target, 10);
    await (await validatorClient()).mint({ recipient:recipient, amount:amount });
    res.json({ success: true, message: 'minted successfully!' });
});

const balance = asyncHandler(async (req, res) => {
    const { address } = req.query;
    const client = await validatorClient(); // Create an instance of Cw20BaseClient
    const result = await client.balance({ address }); // Call balance on the instance
    console.log("=================");
    res.json(result);
  });

//   const balance = asyncHandler(async (req, res) => {
//     const { address } = req.query;
//     //const targetParsed = parseInt(target, 10);
//     const result=await (await validatorClient()).balance({address:address});
//     console.log("=================")
//     res.json(result);
// }); 
  

export {
   transfer,
   burn,
   send,
   mint,
   balance
};