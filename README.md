# cryptopuppies

1. Clone the project 
2. Change directory to the root of the project
3. Insall dependencies:

```
$ npm i
```
4. Create a file called `secret` in the root of the project in which you put your mnemonic
5. Launch ganache-cli with your mnemonic

```
$ ganache-cli -m "mnemonic"
```
6. Migrate the contract to ganache network
```
$ truffle deploy --network private
```
or to testnet
```
$ truffle deploy --network ropsten
```