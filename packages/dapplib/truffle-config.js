require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan release pizza snap gesture brave bridge turn'; 
let testAccounts = [
"0x9771a3b8ed3495bcb5e664ce86d28a7ebc35eb7920f07307160e668fd14d6d4d",
"0x3acd5586f1ae6d1ef02f081f25767ec65d8ee0b9ddddf1b4fe93ffb04ff892c9",
"0xd815e4a01418a9fdb9a470cef82eb5aa3112e4896cb9dfe7d865771bc19191d9",
"0xab38bb1bf60a21011098daff37773e3b13bd49a8c96b553114de557edf02ebe2",
"0xc66c5a22ffea45e5998e18e61015fc88ee0ccbd84b3cc0c37eacee4bda2a2e92",
"0x9cd563ea45dd49e8c756e67789ec4c593ca03bd97517863b539edf404499a4c1",
"0x08c047f787a4d9ab0aedafd7daf79368b98433ac1a5b107f85d39ce0bf239dc7",
"0xc901f9176efe99e1eb210a1dbc03ecf52103d605fce847c79b95477a7d53b1c9",
"0x78d485ba0510b8427059893c260b0122221f694fafb855a9bb60e2e0359da418",
"0xd2406c04e6f716f6b9f751c0df03889b87cace916b92f42de405bc6ee984456d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

