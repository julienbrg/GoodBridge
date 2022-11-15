/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace MPT {
  export type MerkleProofStruct = {
    expectedRoot: PromiseOrValue<BytesLike>;
    key: PromiseOrValue<BytesLike>;
    proof: PromiseOrValue<BytesLike>[];
    keyIndex: PromiseOrValue<BigNumberish>;
    proofIndex: PromiseOrValue<BigNumberish>;
    expectedValue: PromiseOrValue<BytesLike>;
  };

  export type MerkleProofStructOutput = [
    string,
    string,
    string[],
    BigNumber,
    BigNumber,
    string
  ] & {
    expectedRoot: string;
    key: string;
    proof: string[];
    keyIndex: BigNumber;
    proofIndex: BigNumber;
    expectedValue: string;
  };
}

export declare namespace BridgeCore {
  export type BlockReceiptProofsStruct = {
    receiptProofs: MPT.MerkleProofStruct[];
    blockHeaderRlp: PromiseOrValue<BytesLike>;
    blockNumber: PromiseOrValue<BigNumberish>;
  };

  export type BlockReceiptProofsStructOutput = [
    MPT.MerkleProofStructOutput[],
    string,
    BigNumber
  ] & {
    receiptProofs: MPT.MerkleProofStructOutput[];
    blockHeaderRlp: string;
    blockNumber: BigNumber;
  };

  export type BlockHeaderStruct = {
    parentHash: PromiseOrValue<BytesLike>;
    number: PromiseOrValue<BigNumberish>;
  };

  export type BlockHeaderStructOutput = [string, BigNumber] & {
    parentHash: string;
    number: BigNumber;
  };

  export type SignedBlockStruct = {
    chainId: PromiseOrValue<BigNumberish>;
    rlpHeader: PromiseOrValue<BytesLike>;
    signatures: PromiseOrValue<BytesLike>[];
    cycleEnd: PromiseOrValue<BigNumberish>;
    validators: PromiseOrValue<string>[];
  };

  export type SignedBlockStructOutput = [
    BigNumber,
    string,
    string[],
    BigNumber,
    string[]
  ] & {
    chainId: BigNumber;
    rlpHeader: string;
    signatures: string[];
    cycleEnd: BigNumber;
    validators: string[];
  };
}

export interface BridgeCoreInterface extends utils.Interface {
  functions: {
    "chainStartBlock(uint256)": FunctionFragment;
    "chainVerifiedBlocks(uint256,uint256)": FunctionFragment;
    "currentValidators(address)": FunctionFragment;
    "executeReceipts(uint256,((bytes32,bytes,bytes[],uint256,uint256,bytes)[],bytes,uint256)[])": FunctionFragment;
    "isValidConsensus(address[])": FunctionFragment;
    "numValidators()": FunctionFragment;
    "parseRLPToHeader(bytes)": FunctionFragment;
    "submitBlocks((uint256,bytes,bytes[],uint256,address[])[])": FunctionFragment;
    "submitChainBlockParentsAndTxs((uint256,bytes,bytes[],uint256,address[]),uint256,bytes[],((bytes32,bytes,bytes[],uint256,uint256,bytes)[],bytes,uint256)[])": FunctionFragment;
    "usedReceipts(bytes32)": FunctionFragment;
    "validatorsCycleEnd()": FunctionFragment;
    "verifyParentBlocks(uint256,uint256,bytes[],bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "chainStartBlock"
      | "chainVerifiedBlocks"
      | "currentValidators"
      | "executeReceipts"
      | "isValidConsensus"
      | "numValidators"
      | "parseRLPToHeader"
      | "submitBlocks"
      | "submitChainBlockParentsAndTxs"
      | "usedReceipts"
      | "validatorsCycleEnd"
      | "verifyParentBlocks"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "chainStartBlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "chainVerifiedBlocks",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentValidators",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeReceipts",
    values: [
      PromiseOrValue<BigNumberish>,
      BridgeCore.BlockReceiptProofsStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidConsensus",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "numValidators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "parseRLPToHeader",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitBlocks",
    values: [BridgeCore.SignedBlockStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "submitChainBlockParentsAndTxs",
    values: [
      BridgeCore.SignedBlockStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      BridgeCore.BlockReceiptProofsStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "usedReceipts",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorsCycleEnd",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyParentBlocks",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "chainStartBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chainVerifiedBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeReceipts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidConsensus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseRLPToHeader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitChainBlockParentsAndTxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedReceipts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorsCycleEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyParentBlocks",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BridgeCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeCoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    chainStartBlock(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    chainVerifiedBlocks(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    currentValidators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    executeReceipts(
      chainId: PromiseOrValue<BigNumberish>,
      blocks: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isValidConsensus(
      signers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    numValidators(overrides?: CallOverrides): Promise<[BigNumber]>;

    parseRLPToHeader(
      rlpHeader: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BridgeCore.BlockHeaderStructOutput] & {
        header: BridgeCore.BlockHeaderStructOutput;
      }
    >;

    submitBlocks(
      signedBlocks: BridgeCore.SignedBlockStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitChainBlockParentsAndTxs(
      blockData: BridgeCore.SignedBlockStruct,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      txs: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usedReceipts(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validatorsCycleEnd(overrides?: CallOverrides): Promise<[BigNumber]>;

    verifyParentBlocks(
      chainId: PromiseOrValue<BigNumberish>,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      childRlpHeader: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  chainStartBlock(
    chainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  chainVerifiedBlocks(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  currentValidators(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  executeReceipts(
    chainId: PromiseOrValue<BigNumberish>,
    blocks: BridgeCore.BlockReceiptProofsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isValidConsensus(
    signers: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  numValidators(overrides?: CallOverrides): Promise<BigNumber>;

  parseRLPToHeader(
    rlpHeader: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BridgeCore.BlockHeaderStructOutput>;

  submitBlocks(
    signedBlocks: BridgeCore.SignedBlockStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitChainBlockParentsAndTxs(
    blockData: BridgeCore.SignedBlockStruct,
    childBlockNumber: PromiseOrValue<BigNumberish>,
    parentRlpHeaders: PromiseOrValue<BytesLike>[],
    txs: BridgeCore.BlockReceiptProofsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usedReceipts(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validatorsCycleEnd(overrides?: CallOverrides): Promise<BigNumber>;

  verifyParentBlocks(
    chainId: PromiseOrValue<BigNumberish>,
    childBlockNumber: PromiseOrValue<BigNumberish>,
    parentRlpHeaders: PromiseOrValue<BytesLike>[],
    childRlpHeader: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    chainStartBlock(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainVerifiedBlocks(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    currentValidators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeReceipts(
      chainId: PromiseOrValue<BigNumberish>,
      blocks: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    isValidConsensus(
      signers: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    numValidators(overrides?: CallOverrides): Promise<BigNumber>;

    parseRLPToHeader(
      rlpHeader: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BridgeCore.BlockHeaderStructOutput>;

    submitBlocks(
      signedBlocks: BridgeCore.SignedBlockStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    submitChainBlockParentsAndTxs(
      blockData: BridgeCore.SignedBlockStruct,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      txs: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    usedReceipts(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validatorsCycleEnd(overrides?: CallOverrides): Promise<BigNumber>;

    verifyParentBlocks(
      chainId: PromiseOrValue<BigNumberish>,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      childRlpHeader: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    chainStartBlock(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    chainVerifiedBlocks(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentValidators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeReceipts(
      chainId: PromiseOrValue<BigNumberish>,
      blocks: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isValidConsensus(
      signers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    numValidators(overrides?: CallOverrides): Promise<BigNumber>;

    parseRLPToHeader(
      rlpHeader: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitBlocks(
      signedBlocks: BridgeCore.SignedBlockStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitChainBlockParentsAndTxs(
      blockData: BridgeCore.SignedBlockStruct,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      txs: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usedReceipts(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatorsCycleEnd(overrides?: CallOverrides): Promise<BigNumber>;

    verifyParentBlocks(
      chainId: PromiseOrValue<BigNumberish>,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      childRlpHeader: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    chainStartBlock(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    chainVerifiedBlocks(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentValidators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeReceipts(
      chainId: PromiseOrValue<BigNumberish>,
      blocks: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isValidConsensus(
      signers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    numValidators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parseRLPToHeader(
      rlpHeader: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitBlocks(
      signedBlocks: BridgeCore.SignedBlockStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitChainBlockParentsAndTxs(
      blockData: BridgeCore.SignedBlockStruct,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      txs: BridgeCore.BlockReceiptProofsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usedReceipts(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatorsCycleEnd(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyParentBlocks(
      chainId: PromiseOrValue<BigNumberish>,
      childBlockNumber: PromiseOrValue<BigNumberish>,
      parentRlpHeaders: PromiseOrValue<BytesLike>[],
      childRlpHeader: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
