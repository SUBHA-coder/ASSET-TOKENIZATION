// 2_deploy_contracts.js
const AssetToken = artifacts.require("AssetToken");

module.exports = function(deployer) {
  deployer.deploy(AssetToken, "AssetToken", "AST", 1000000);
};
