const { SigningCosmWasmClient } = require("@cosmjs/cosmwasm-stargate");
const { DirectSecp256k1Wallet } = require("@cosmjs/proto-signing");
const { fromHex } = require("@cosmjs/encoding");
const { GasPrice } = require("@cosmjs/stargate");

const { Cw20BaseClient } = require("../../out/codegen/Cw20Base.client.cjs");


const { contractAddress,validatorPrivKey, alicePrivKey, fredPrivKey} = require("../env.js");
const getSignerFromPriKey = async (priv) => {
    return DirectSecp256k1Wallet.fromKey(fromHex(priv), "wasm");
};
const rpcUrl = "http://localhost:26657";
module.exports = { rpcUrl };

async function validatorClient() {
    const validatorSigner = await getSignerFromPriKey(validatorPrivKey);
    const validatorAddress = (await validatorSigner.getAccounts())[0].address
    const validatorssc = await SigningCosmWasmClient.connectWithSigner(rpcUrl, validatorSigner, { gasPrice: GasPrice.fromString("100ustake") });
    const validatorwc = new Cw20BaseClient(validatorssc, validatorAddress, contractAddress);

    return validatorwc;
}

module.exports = { validatorClient };


 async function aliceClient() {
    const aliceSigner = await getSignerFromPriKey(alicePrivKey);
    const aliceAddress = (await aliceSigner.getAccounts())[0].address
    const alicessc = await SigningCosmWasmClient.connectWithSigner(rpcUrl, aliceSigner, { gasPrice: GasPrice.fromString("100ustake") });
    const alicewc = new Cw20BaseClient(alicessc, aliceAddress, contractAddress);

    return alicewc;
}

module.exports = { aliceClient };

 async function fredClient() {
    const fredSigner = await getSignerFromPriKey(fredPrivKey);
    const fredAddress = (await fredSigner.getAccounts())[0].address
    const fredssc = await SigningCosmWasmClient.connectWithSigner(rpcUrl, fredSigner, { gasPrice: GasPrice.fromString("100ustake") });
    const fredwc = new Cw20BaseClient(fredssc, fredAddress, contractAddress);

    return fredwc;
}

module.exports = { fredClient };