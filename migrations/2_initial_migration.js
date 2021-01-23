const cryptopuppies = artifacts.require("cryptopuppies");

module.exports = function (deployer) {
  deployer.deploy(cryptopuppies);
};
