# Smart contract deployment

## Locally

To store the contract and get code is and code hash

```
RESP=$(wasmd tx wasm store "x/wasm/keeper/testdata/cw20_base.wasm" \
  --from validator --gas 2500000 -y --chain-id=testing --node=http://localhost:26657 -b sync -o json --keyring-backend=test)

RESP=$(wasmd q tx $(echo "$RESP"| jq -r '.txhash') -o json)  

CODE_ID=$(echo "$RESP" | jq -r '.events[]| select(.type=="store_code").attributes[]| select(.key=="code_id").value')

CODE_HASH=$(echo "$RESP" | jq -r '.events[]| select(.type=="store_code").attributes[]| select(.key=="code_checksum").value')

echo "* Code id: $CODE_ID"

echo "* Code checksum: $CODE_HASH"
```

To instantiate the contract 
 
```
wasmd query wasm list-code --node=http://localhost:26657 -o json | jq 


INIT="{\"name\":\"hello world\", \"symbol\":\"hwrld\", \"decimals\":6, \"initial_balances\":[{\"address\":\"$(wasmd keys show validator -a --keyring-backend=test)\", \"amount\":\"1000000\"}]}"


RESP=$(wasmd tx wasm instantiate "$CODE_ID" "$INIT" --admin="$(wasmd keys show validator -a --keyring-backend=test)" \
  --from validator --amount="100ustake" --label "local0.1.0" \
  --gas 2000000 -y --chain-id=testing -b sync -o json --keyring-backend=test)
  
wasmd q tx $(echo "$RESP"| jq -r '.txhash') -o json | jq

NODE=--node=http://localhost:26657

CONTRACT_ADDRESS=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')
```

Smart contract is now successfully stored on the chain. 

To see token balance :
 
```
JSON=$(jq -n --arg address $(wasmd keys show validator -a --keyring-backend=test) '{balance: {address: $address}}') && \
wasmd query wasm contract-state smart $CONTRACT_ADDRESS "$JSON" $NODE --output json | jq
```

To mint tokens to participants :
 
```
JSON=$(jq -n --arg to $(wasmd keys show alice -a --keyring-backend=test) --arg amount 100000 '{"mint": {recipient: $to, amount: $amount}}') && \
RESP=$(wasmd tx wasm execute $CONTRACT_ADDRESS "$JSON" --from validator --amount="100ustake" \
  --gas 2000000 -y --chain-id=testing -b sync -o json --keyring-backend=test --output json | jq)
```

To send some tokens from validator to Alice account:

```
JSON=$(jq -n --arg to $(wasmd keys show alice -a --keyring-backend=test) --arg amount 100 '{"transfer": {recipient: $to, amount: $amount}}') && \
RESP=$(wasmd tx wasm execute $CONTRACT_ADDRESS "$JSON" --from validator --amount="100ustake" \
  --gas 2000000 -y --chain-id=testing -b sync -o json --keyring-backend=test --output json | jq)
```
