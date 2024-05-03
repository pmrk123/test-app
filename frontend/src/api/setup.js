import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { fromHex } from "@cosmjs/encoding";
import { GasPrice } from "@cosmjs/stargate";

import { Cw20BaseClient } from "../../out/codegen/Cw20Base.client.cjs";


import { contractAddress,validatorPrivKey, alicePrivKey, fredPrivKey} from "../env.js";
const getSignerFromPriKey = async (priv) => {
    return DirectSecp256k1Wallet.fromKey(fromHex(priv), "wasm");
};
export const rpcUrl = "http://localhost:26657";

export async function validatorClient() {
    const validatorSigner = await getSignerFromPriKey(validatorPrivKey);
    const validatorAddress = (await validatorSigner.getAccounts())[0].address
    const validatorssc = await SigningCosmWasmClient.connectWithSigner(rpcUrl, validatorSigner, { gasPrice: GasPrice.fromString("100ustake") });
    const validatorwc = new Cw20BaseClient(validatorssc, validatorAddress, contractAddress);

    return validatorwc;
}

export async function aliceClient() {
    const aliceSigner = await getSignerFromPriKey(alicePrivKey);
    const aliceAddress = (await aliceSigner.getAccounts())[0].address
    const alicessc = await SigningCosmWasmClient.connectWithSigner(rpcUrl, aliceSigner, { gasPrice: GasPrice.fromString("100ustake") });
    const alicewc = new Cw20BaseClient(alicessc, aliceAddress, contractAddress);

    return alicewc;
}

export async function fredClient() {
    const fredSigner = await getSignerFromPriKey(fredPrivKey);
    const fredAddress = (await fredSigner.getAccounts())[0].address
    const fredssc = await SigningCosmWasmClient.connectWithSigner(rpcUrl, fredSigner, { gasPrice: GasPrice.fromString("100ustake") });
    const fredwc = new Cw20BaseClient(fredssc, fredAddress, contractAddress);

    return fredwc;
}