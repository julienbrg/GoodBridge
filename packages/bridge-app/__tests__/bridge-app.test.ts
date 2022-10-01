import * as ethers from "ethers"
import * as SigUtils from "../src/utils"
import * as BridgeApp from "../src/blockHeaderRegistry"

const delay = async (milis) => {
  return new Promise((res) => {
    setTimeout(res,milis)
  })
}
jest.setTimeout(120000)

describe('block header registry', () => {
    const localNode = new ethers.providers.JsonRpcProvider("http://localhost:8545")
    const signer = ethers.Wallet.fromMnemonic("test test test test test test test test test test test junk").connect(localNode)
    let registry:ethers.Contract
    // Act before assertions
    beforeAll(async () => {
      // Read more about fake timers
      // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
      // Jest 27 now uses "modern" implementation of fake timers
      // https://jestjs.io/blog/2021/05/25/jest-27#flipping-defaults
      // https://github.com/facebook/jest/pull/5171
      registry = await SigUtils.getRegistryContract("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",signer)      
      try {
         await registry.voting()
      }
      catch(e) {
        throw new Error("hardhat node should be running for tests: "+e.message)
      }
    });


    
  it('creates ethereum rlpHeader', async () => {
    const {block,rlpHeader, blockHeader, computedHash} = await SigUtils.getBlockchainHeader("latest",1,"https://cloudflare-eth.com/")
    expect(rlpHeader).toBeDefined()
    expect(blockHeader).toBeDefined()
    expect(computedHash).toEqual(block.hash)
  })

  it('creates fuse rlpHeader', async () => {
    const {block,rlpHeader, blockHeader, computedHash} = await SigUtils.getBlockchainHeader("latest",122,"https://rpc.fuse.io")
    expect(rlpHeader).toBeDefined()
    expect(blockHeader).toBeDefined()
    expect(computedHash).toEqual(block.hash)
  })

  it('creates gnosis rlpHeader', async () => {
    const {block,rlpHeader, blockHeader, computedHash} = await SigUtils.getBlockchainHeader("15000000",100,"https://rpc.gnosischain.com	")
    expect(rlpHeader).toBeDefined()
    expect(blockHeader).toBeDefined()
    expect(computedHash).toEqual(block.hash)
  })

  it('creates binance rlpHeader', async () => {
    const {block,rlpHeader, blockHeader, computedHash} = await SigUtils.getBlockchainHeader("latest",56,"https://bscrpc.com")
    expect(rlpHeader).toBeDefined()
    expect(blockHeader).toBeDefined()
    expect(computedHash).toEqual(block.hash)
  })

  it('creates celo rlpHeader', async () => {
    const {block,rlpHeader, blockHeader, computedHash} = await SigUtils.getBlockchainHeader("latest",42220,"https://forno.celo.org")
    expect(rlpHeader).toBeDefined()
    expect(blockHeader).toBeDefined()
    expect(computedHash).toEqual(block.hash)
  })

  // Assert if setTimeout was called properly
  it('signs and submit fuse block', async () => {
    const {rlpHeader, blockHeader, block} = await SigUtils.getBlockchainHeader("latest",122,"https://rpc.fuse.io")
    const cycleEnd = Number((Date.now()/1000).toFixed(0))
    const validators = [signer.address]
    const signedBlock = await SigUtils.signBlock(rlpHeader, 122, signer,cycleEnd, validators)
    await registry.addSignedBlocks([signedBlock])    
    expect(await registry.blockHashes(122,blockHeader.number,0)).not.toBeNull()

    const packed = ethers.utils.solidityPack(["bytes32", "uint256", "address[]", "uint256"], [block.hash, 122, validators, cycleEnd])
    const payload = ethers.utils.keccak256(packed);
    //validate block data
    const savedBlock = await registry.getBlockHashByPayloadHash(payload)
    expect(savedBlock).toEqual(block.hash)
  });

  it("initializes blockchain",() => {
    BridgeApp.initBlockchain(122, "https://rpc.fuse.io")
    BridgeApp.initBlockchain(56, "https://bscrpc.com")
    expect(BridgeApp.blockchains['122'].web3).not.toBeNull()
    expect(BridgeApp.blockchains['122'].lastBlock).toBeUndefined()
    expect(BridgeApp.blockchains['122'].rpc).toBe("https://rpc.fuse.io")
    expect(BridgeApp.blockchains['56'].web3).not.toBeNull()
    expect(BridgeApp.blockchains['56'].lastBlock).toBeUndefined()
    expect(BridgeApp.blockchains['56'].rpc).toBe("https://bscrpc.com")
  })

  it("fetches, signs and submits blocks for registered blockchains", async () => {
    BridgeApp.setStepSize(2)
    BridgeApp.initBlockRegistryContract(signer,"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0","0x5fbdb2315678afecb367f032d93f642f64180aa3","http://localhost:8545")

    BridgeApp.initBlockchain(122, "https://rpc.fuse.io")
    BridgeApp.initBlockchain(56, "https://bscrpc.com")
    const blocks = await BridgeApp.fetchNewBlocks(signer)
    expect(blocks.length).toEqual(2)
    const fuseBlock = blocks.find(_ => _.chainId===122)
    const bscBlock = blocks.find(_ => _.chainId===56)
    await delay(BridgeApp.stepSize * 6000) //wait for stepSize blocks 
    const nextBlocks = await BridgeApp.fetchNewBlocks(signer)
    const fuseBlock2 = nextBlocks.find(_ => _.chainId===122)
    const bscBlock2 = nextBlocks.find(_ => _.chainId===56)
    expect(fuseBlock2.rlpHeader).not.toEqual(fuseBlock.rlpHeader)
    expect(bscBlock2.rlpHeader).not.toEqual(bscBlock.rlpHeader)
    const tx = await registry.addSignedBlocks(nextBlocks)
    const r = await tx.wait()
    expect(r).toBeDefined()
  })

  it("bridge app should init blockchains, fetch blocks and add blocks to registry",async () => {
    delete BridgeApp.blockchains['122']
    delete BridgeApp.blockchains['56']
    BridgeApp.setStepSize(2)

    BridgeApp.initBlockRegistryContract(signer,"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0","0x5fbdb2315678afecb367f032d93f642f64180aa3","http://localhost:8545")

    await BridgeApp.refreshRPCs()
    //should initialize chains from contract as defined in deployDevEnv.ts script
    expect(BridgeApp.blockchains['122'].web3).not.toBeNull()
    expect(BridgeApp.blockchains['122'].lastBlock).toBeUndefined()
    expect(BridgeApp.blockchains['122'].rpc).toBe("https://rpc.fuse.io")

    const blocks = await BridgeApp.emitRegistry()
    expect(blocks.length).toEqual(1)
    const fuseBlock = blocks.find(_ => _.chainId===122)
    await delay(BridgeApp.stepSize * 6000)
    const nextBlocks = await BridgeApp.emitRegistry()
    const fuseBlock2 = nextBlocks.find(_ => _.chainId===122)
    expect(fuseBlock2.rlpHeader).not.toEqual(fuseBlock.rlpHeader)
  })

  it("emits multiple blocks",async () => {
    BridgeApp.setStepSize(2)
    delete BridgeApp.blockchains['122']
    delete BridgeApp.blockchains['56']
    BridgeApp.initBlockRegistryContract(signer,"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0","0x5fbdb2315678afecb367f032d93f642f64180aa3","http://localhost:8545")
    await BridgeApp.refreshRPCs()

    //should initialize chains from contract as defined in deployDevEnv.ts script
    const blocks = await BridgeApp.emitRegistry()    
    expect(blocks.length).toEqual(1)
    await delay(30000)
    const nextBlocks = await BridgeApp.emitRegistry()
    expect(nextBlocks.length).toBeGreaterThan(1)
  })

});
