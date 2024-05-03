# Running client code

## Locally

Inside this folder

Copy the participant's private key and contract address in the [environment](/src/env.js)

To get participant's private key:

```
wasmd keys export validator --keyring-backend=test --unsafe --unarmored-hex
```


```
npm install
npm start
```

The server will start listening on port 4000