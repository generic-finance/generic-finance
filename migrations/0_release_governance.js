/**
 * Final Deployment Step: Release Governance 
 * from the EOA deployment account to  
 * multisig address.
 */

const Promise = require("bluebird");
const secret = require("./secret.json");
const Storage = artifacts.require("Storage");

module.exports = (deployer) => {
    return new Promise.resolve()
        .then(() => {
            return Storage.at(secret.STORAGE_ADDRESS);
        })
        .then(storage => {
            storage.setGovernance(secret.MULTI_SIG_GOVERNANCE);
        })
};
