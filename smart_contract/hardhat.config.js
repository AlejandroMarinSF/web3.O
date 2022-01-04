// https://eth-ropsten.alchemyapi.io/v2/frY4WEg-ImLwRGHDj6pl2oRuv_0KaqSp

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/frY4WEg-ImLwRGHDj6pl2oRuv_0KaqSp',
      accounts: [ 'fd117c36490014799acbb7838707345c3d80420ec14d96279389a76b9408bbca' ]
    }
  }
}