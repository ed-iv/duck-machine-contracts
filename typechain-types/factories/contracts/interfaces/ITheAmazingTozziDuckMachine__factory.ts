/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITheAmazingTozziDuckMachine,
  ITheAmazingTozziDuckMachineInterface,
} from "../../../contracts/interfaces/ITheAmazingTozziDuckMachine";

const _abi = [
  {
    inputs: [],
    name: "AmountMustBeNonZero",
    type: "error",
  },
  {
    inputs: [],
    name: "BurnWindowPassed",
    type: "error",
  },
  {
    inputs: [],
    name: "CustomDuckLimitReached",
    type: "error",
  },
  {
    inputs: [],
    name: "DuckAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectDuckPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientDuckAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDuckId",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidStatusId",
    type: "error",
  },
  {
    inputs: [],
    name: "MintingDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "duckId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "duckOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "machineOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "webp",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "CustomDuckBurned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "webpHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ITheAmazingTozziDuckMachine.DuckType",
        name: "duckType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "DuckMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "duckId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "status",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "DuckProfileUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "title",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "DuckTitleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MOTDSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tozziDuckPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "customDuckPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxCustomDucks",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum ITheAmazingTozziDuckMachine.MintStatus",
        name: "tozziDuckMintStatus",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ITheAmazingTozziDuckMachine.MintStatus",
        name: "customDuckMintStatus",
        type: "uint8",
      },
    ],
    name: "MachineConfigUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "burnRenegadeDuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "webp",
        type: "string",
      },
    ],
    name: "mintCustomDuck",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duckId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "webp",
        type: "string",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "mintTozziDuck",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "webp",
        type: "string",
      },
    ],
    name: "ownerMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "setArtistName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "tozziDuckAllowance",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "customDuckAllowance",
            type: "uint128",
          },
        ],
        internalType: "struct ITheAmazingTozziDuckMachine.DuckAllowance",
        name: "allowance",
        type: "tuple",
      },
    ],
    name: "setDuckAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "who",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "tozziDuckAllowance",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "customDuckAllowance",
            type: "uint128",
          },
        ],
        internalType: "struct ITheAmazingTozziDuckMachine.DuckAllowance",
        name: "allowance",
        type: "tuple",
      },
    ],
    name: "setDuckAllowances",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "status",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "setDuckProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "title",
        type: "bytes32",
      },
    ],
    name: "setDuckTitle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "motd",
        type: "string",
      },
    ],
    name: "setMOTD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tozziDuckPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "customDuckPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxCustomDucks",
            type: "uint256",
          },
          {
            internalType: "enum ITheAmazingTozziDuckMachine.MintStatus",
            name: "tozziDuckMintStatus",
            type: "uint8",
          },
          {
            internalType: "enum ITheAmazingTozziDuckMachine.MintStatus",
            name: "customDuckMintStatus",
            type: "uint8",
          },
        ],
        internalType: "struct ITheAmazingTozziDuckMachine.MachineConfig",
        name: "_machineConfig",
        type: "tuple",
      },
    ],
    name: "setMachineConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "ownershipTokenUri",
        type: "string",
      },
    ],
    name: "setOwnershipTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITheAmazingTozziDuckMachine__factory {
  static readonly abi = _abi;
  static createInterface(): ITheAmazingTozziDuckMachineInterface {
    return new utils.Interface(_abi) as ITheAmazingTozziDuckMachineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITheAmazingTozziDuckMachine {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITheAmazingTozziDuckMachine;
  }
}
