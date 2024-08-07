# Smart contract deployment

## Locally

To store the contract and get code is and code hash, 
Run the below commands in your contracts/contracts folder

```
RESP=$(./../../chains/wasmd/build/wasmd tx wasm store "cw20_base.wasm" \
  --from validator --gas 2500000 -y --chain-id=testing --node=http://localhost:26657 -b sync -o json)
```

To see the stored contract from the explorer

```
TX_HASH_WASMD=$(echo $RESP | jq -r '.txhash') && \
echo "http://localhost:8088/testing/tx/$TX_HASH_WASMD" 
xdg-open "http://localhost:8088/testing/tx/$TX_HASH_WASMD"
```

```
RESP=$(./../../chains/wasmd/build/wasmd q tx $(echo "$RESP"| jq -r '.txhash') -o json)  

CODE_ID=$(echo "$RESP" | jq -r '.events[]| select(.type=="store_code").attributes[]| select(.key=="code_id").value')

CODE_HASH=$(echo "$RESP" | jq -r '.events[]| select(.type=="store_code").attributes[]| select(.key=="code_checksum").value')

echo "* Code id: $CODE_ID"

echo "* Code checksum: $CODE_HASH"
```

To instantiate the contract 
 
```
./../../chains/wasmd/build/wasmd query wasm list-code --node=http://localhost:26657 -o json | jq 


INIT="{\"name\":\"hello world\", \"symbol\":\"hwrld\", \"decimals\":6, \"initial_balances\":[{\"address\":\"$(./../../chains/wasmd/build/wasmd keys show validator -a)\", \"amount\":\"1000000\"}]}"

<!-- 
RESP=$(./../../chains/wasmd/build/wasmd tx wasm instantiate "$CODE_ID" "$INIT" --admin="$(./../../chains/wasmd/build/wasmd keys show validator -a)" \
  --from validator --amount="100ustake" --label "local0.1.0" \
  --gas 2000000 -y --chain-id=testing -b sync -o json)
  
./../../chains/wasmd/build/wasmd q tx $(echo "$RESP"| jq -r '.txhash') -o json | jq -->

NODE=--node=http://localhost:26657

CONTRACT_ADDRESS=$(./../../chains/wasmd/build/wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')

TX_HASH=$(echo $RESP | jq -r '.txhash') && \
./../../chains/wasmd/build/wasmd q tx $TX_HASH $NODE_WASMD --output json | jq && \
echo "http://localhost:8088/testing/tx/$TX_HASH" && \
xdg-open "http://localhost:8088/testing/tx/$TX_HASH"
```

Smart contract is now successfully stored on the chain. 

To see token balance :
 
```
JSON=$(jq -n --arg address $(./../../chains/wasmd/build/wasmd keys show validator -a) '{balance: {address: $address}}') && \
./../../chains/wasmd/build/wasmd query wasm contract-state smart $CONTRACT_ADDRESS "$JSON" $NODE --output json | jq
```

To mint tokens to participants :
 
```
JSON=$(jq -n --arg to $(./../../chains/wasmd/build/wasmd keys show alice -a) --arg amount 100000 '{"mint": {recipient: $to, amount: $amount}}') && \
RESP=$(./../../chains/wasmd/build/wasmd tx wasm execute $CONTRACT_ADDRESS "$JSON" --from validator --amount="100ustake" \
  --gas 2000000 -y --chain-id=testing -b sync -o json --output json | jq)
```

To send some tokens from validator to Alice account:

```
JSON=$(jq -n --arg to $(./../../chains/wasmd/build/wasmd keys show alice -a) --arg amount 100 '{"transfer": {recipient: $to, amount: $amount}}') && \
RESP=$(./../../chains/wasmd/build/wasmd tx wasm execute $CONTRACT_ADDRESS "$JSON" --from validator --amount="100ustake" \
  --gas 2000000 -y --chain-id=testing -b sync -o json --output json | jq)
```
