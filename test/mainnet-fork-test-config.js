module.exports = {

// 0x07bb is an address that holds a lot of Dai and some Ether
// We found the address by checking out the "holder" page of Dai
// https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f#balances
// It holds large amounts of Dai, but can transfer the amount away as well
// Need to "unlock" this account in ganache mainnet fork, see package.json
// This could be one of the reasons if this mainnet fork test starts failing
//
// Check the address to see if it still holds enough amount of Ether
// If it is not a Dai holder anymore, then change to another EOA found from the list above
// remember to also change the unlocked account in package.json

  FARM_ADDRESS: "0xa0246c9032bC3A600820415aE600c6388619A14D",
  GOVERNANCE_ADDRESS: "0xf00dD244228F51547f0563e60bCa65a30FBF5f7f",
  OPS_ADDRESS: "0x843002b1D545ef7abB71C716e6179570582faA40",
  DELAY_MINTER_ADDRESS: "0x284D7200a0Dabb05ee6De698da10d00df164f61d",
  FEE_REWARD_FORWARDER_ADDRESS: "0xEF08A639cAc2009fdAD3773CC9F56D6a8feB1153",

  DAI_WHALE_ADDRESS: "0x6DCb8492B5De636fD9e0a32413514647D00eF8D0",
  DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f",

  USDC_WHALE_ADDRESS: "0x8cee3eeab46774c1CDe4F6368E3ae68BcCd760Bf",
  USDC_ADDRESS: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",

  //TUSD
  TUSD_WHALE_ADDRESS: "0x270cd0b43f6fe2512a32597c7a05fb01ee6ec8e1",
  TUSD_ADDRESS: "0x0000000000085d4780B73119b644AE5ecd22b376",


  WBTC_WHALE_ADDRESS: "0x3b938E9525e14361091ee464D8AceC291b3caE50",
  WBTC_ADDRESS: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  SWRV_ADDRESS: "0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433", // sverwe DAO token

  // crvRenWBTC
  CRV_RENWBTC_WHALE_ADDRESS: "0x97ca371d59bbfefdb391aa6dcbdf4455fec361f2",
  CRV_RENWBTC_ADDRESS: "0x49849C98ae39Fff122806C06791Fa73784FB3675",

  // WETH
  WETH_ADDRESS: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  WETH_WHALE_ADDRESS: "0x4444a8552e9646c58a1f23d52170b666862050c0",

  // yCRV
  YCRV_WHALE_ADDRESS: "0x39415255619783a2e71fcf7d8f708a951d92e1b6",
  YCRV_ADDRESS: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",

  // YFII
  YFII_ADDRESS: "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83",
  YFII_POOL_ADDRESS: "0xb81D3cB2708530ea990a287142b82D058725C092",

  // Compound
  COMP_ADDRESS: "0xc00e94cb662c3520282e6f5717214004a7f26888",
  COMPTROLLER_ADDRESS: "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
  CDAI_ADDRESS: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",

  // Curve
  YCRV_ADDRESS: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
  CRV_ADDRESS: "0xD533a949740bb3306d119CC777fa900bA034cd52",

  // UniswapV2
  UNISWAP_V2_ROUTER02_ADDRESS: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  UNI_ADDRESS: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",

  // Uniswap LP
  UNISWAP_ETH_FARM_LP_ADDRESS: "0x56feAccb7f750B997B36A68625C7C596F0B41A58",

  UNISWAP_STAKING_REWARD_FACTORY_ADDRESS: "0x3032ab3fa8c01d786d29dade018d7f2017918e12",

  UNISWAP_ETH_USDT_LP_ADDRESS: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
  UNISWAP_ETH_USDT_LP_WHALE_ADDRESS: "0xd2db6c5e613c0e1ce63c7a15045e8d163a3fc576",
  UNISWAP_ETH_USDT_STAKING_POOL_ADDRESS: "0x6c3e4cb2e96b01f4b866965a91ed4437839a121a",

  UNISWAP_ETH_USDC_LP_ADDRESS: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
  UNISWAP_ETH_USDC_LP_WHALE_ADDRESS: "0xeD7f11435Cc09D51739f91F9b6FCA9272d795279",
  UNISWAP_ETH_USDC_STAKING_POOL_ADDRESS: "0x7FBa4B8Dc5E7616e59622806932DBea72537A56b",

  UNISWAP_ETH_DAI_LP_ADDRESS: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
  UNISWAP_ETH_DAI_LP_WHALE_ADDRESS: "0x79317fC0fB17bC0CE213a2B50F343e4D4C277704",
  UNISWAP_ETH_DAI_STAKING_POOL_ADDRESS: "0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711",

  UNISWAP_ETH_WBTC_LP_ADDRESS: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
  UNISWAP_ETH_WBTC_LP_WHALE_ADDRESS: "0x3733E403164a3dC9234aFC393610B96530DB37D0",
  UNISWAP_ETH_WBTC_STAKING_POOL_ADDRESS: "0xCA35e32e7926b96A9988f61d510E038108d8068e",

  // USDT
  USDT_ADDRESS: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  // USDT_WHALE_ADDRESS: "0x0A98fB70939162725aE66E626Fe4b52cFF62c2e5",
  USDT_WHALE_ADDRESS: "0xaaf5959918b74a6cab04a18987ab73dd9567a8d1",

  // CREAM
  CREAM_ADDRESS: "0x2ba592F78dB6436527729929AAf6c908497cB200",
  CREAM_COMPTROLLER_ADDRESS: "0x3d5bc3c8d13dcb8bf317092d84783c2697ae9258",
  crETH_ADDRESS: "0xD06527D5e56A3495252A528C4987003b712860eE",

  "VaultUNI_LP_WETH_USDT": "0xB19EbFB37A936cCe783142955D39Ca70Aa29D43c",
  "ProxiedVault_UNI_LP_WETH_USDT": "0x7ddc3fff0612e75ea5ddc0d6bd4e268f70362cff",

  "MigrationStrategy_UNI_LP_WETH_USDT": "0x7Db901D1847CA5fa0058a7672Ac8cB7Ce89d912d",
  "UNI_LP_WETH_USDTPool": "0x9494a3026f28D0B189252428cebbFA52e69608c4",
  "Proxied_UNI_LP_WETH_USDTPool": "0x75071F2653fBC902EBaff908d4c68712a5d1C960",

  "VaultUNI_LP_WETH_USDC": "0x63671425ef4D25Ec2b12C7d05DE855C143f16e3B",
  "VaultUNI_LP_WETH_DAI": "0x1a9F22b4C385f78650E7874d64e442839Dc32327",
  "VaultUNI_LP_WETH_WBTC": "0xb1FeB6ab4EF7d0f41363Da33868e85EB0f3A57EE",

  "ProxiedVault_UNI_LP_WETH_USDC":"0xA79a083FDD87F73c2f983c5551EC974685D6bb36",
  "ProxiedVault_UNI_LP_WETH_DAI":"0x307E2752e8b8a9C29005001Be66B1c012CA9CDB7",
  "ProxiedVault_UNI_LP_WETH_WBTC":"0x01112a60f427205dcA6E229425306923c3Cc2073",

  "Proxied_UNI_LP_WETH_USDCPool": "0x156733b89Ac5C704F3217FEe2949A9D4A73764b5",
  "Proxied_UNI_LP_WETH_DAIPool": "0x7aeb36e22e60397098C2a5C51f0A5fB06e7b859c",
  "Proxied_UNI_LP_WETH_WBTCPool": "0xF1181A71CC331958AE2cA2aAD0784Acfc436CB93",

  "MigrationStrategy_UNI_LP_WETH_USDC": "0x62F21E688eD98764668Ae86FCf6Bb812131E7ead",
  "MigrationStrategy_UNI_LP_WETH_DAI": "0x13cA81aceA3C6fd3aE64baE7E2A5EF04D7330FD6",
  "MigrationStrategy_UNI_LP_WETH_WBTC": "0x6FC653ce2190289D7eE4A4CB557B348600d85334",

  OLD_ETH_USDT_VAULT_ADDRESS: "0xB19EbFB37A936cCe783142955D39Ca70Aa29D43c",
  NEW_ETH_USDT_VAULT_ADDRESS: "0x7ddc3fff0612e75ea5ddc0d6bd4e268f70362cff",

  // Sushiswap LP
  SUSHI_ADDRESS: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
  SUSHISWAP_MASTER_CHEF: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
  SUSHISWAP_ROUTER_ADDRESS: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",

  SUSHISWAP_WBTC_TBTC_LP_ADDRESS: "0x2dbc7dd86c6cd87b525bd54ea73ebeebbc307f68",
  SUSHISWAP_WBTC_TBTC_LP_WHALE_ADDRESS: "0x328ba3eae00165f7a90f59c6d7a9891234a68e27",
  SUSHISWAP_WBTC_TBTC_POOL_ID: 32,

  TBTC_ADDRESS: "0x8daebade922df735c38c80c7ebd708af50815faa",
  TBTC_WHALE_ADDRESS: "0xe86e615406704dd255bcd209be8161d64e323680",

  // DEGO
  DEGO_WETH_RewardPool_ADDRESS: "0x28681d373af03a0eb00ace262c5dad9a0c65f276",
  DEGO_ADDRESS: "0x88ef27e69108b2633f8e1c184cc37940a075cc02",

  // KITTEN
  KIF_ADDRESS: "0x177ba0cac51bfc7ea24bad39d81dcefd59d74faa",
  KITTEN_WETH_RewardPool_ADDRESS: "0xb1236770ED9015E331c021347E005b00c8B8a01B",

  "renBTC_ADDRESS": "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
  "crvRenWBTC_ADDRESS": "0x49849C98ae39Fff122806C06791Fa73784FB3675"
};