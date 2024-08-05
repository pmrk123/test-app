#!/bin/bash
set -o errexit -o nounset -o pipefail

BASE_ACCOUNT=$(./../../../build/wasmd keys show validator --address)
./../../../build/wasmd q auth account "$BASE_ACCOUNT" -o json | jq

echo "## Add new account"
./../../../build/wasmd keys add fred
./../../../build/wasmd keys add alice 

echo "## Check balance"
NEW_ACCOUNT=$(./../../../build/wasmd keys show fred --address)
./../../../build/wasmd q bank balances "$NEW_ACCOUNT" --output json || true

echo "## Transfer tokens"
./../../../build/wasmd tx bank send "$BASE_ACCOUNT" "$NEW_ACCOUNT" 1ustake --gas 1000000 -y --chain-id=testing --node=http://localhost:26657 -b sync -o json| jq

echo "## Check balance again"
./../../../build/wasmd q bank balances "$NEW_ACCOUNT" -o json | jq
