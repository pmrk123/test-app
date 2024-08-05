# Running client code

## Locally

Inside this folder

Copy the participant's private key and contract address in the (src/env.js) file

To get participant's private key:

```
./../chains/wasmd/build/wasmd keys export validator --unsafe --unarmored-hex
```


```
npm install
npm start
```

The server will start listening on port 4000