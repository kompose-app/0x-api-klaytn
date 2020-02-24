import { NULL_ADDRESS } from './constants';
import { ChainId } from './types';

export interface TokenMetadataAndChainAddresses {
    symbol: string;
    decimals: number;
    name: string;
    tokenAddresses: {
        [ChainId.Cypress]: string;
        [ChainId.Baobab]: string;
    };
}

// Most token metadata taken from Jetstream Wallet
// tslint:disable:max-file-line-count
export const TokenMetadatasForChains: TokenMetadataAndChainAddresses[] = [
    {
        symbol: 'KUSD',
        name: 'KUSD Stablecoin',
        decimals: 2,
        tokenAddresses: {
            [ChainId.Cypress]: '0x5faad3204b3ca681a6a312e15ff52a4cc76ade06',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'WKLAY',
        name: 'Wrapped KLAY',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x43f9ce2ad0e98a6946154bef37b182b5915ed13d',
            [ChainId.Baobab]: '0x9330dd6713c8328a8d82b14e3f60a0f0b4cc7bfb',
        },
    },
    {
        symbol: 'ZRX',
        name: '0x Protocol Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0xe4431690f9fb373db73cc05e8cb0b2a394de6f3f',
            [ChainId.Baobab]: '0xcc60b9ac77c9ac9a3ccb9d616c17fc8a5803c5a8',
        },
    },
    {
        symbol: 'HINT',
        name: 'Hint Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x8a4727b93d1644fc732bda43112bdd3cac7b686f',
            [ChainId.Baobab]: '0x2980e1ce342d9a234331abce8bb46f64b370ff50',
        },
    },
    {
        symbol: 'ISR',
        name: 'Insureum',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x9657fb399847d85a9c1a234ece9ca09d5c00f466',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'SPIN',
        name: 'SPIN Protocol',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x472fac08cf4836bee54343edfb49023746b27933',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'TEMCO',
        name: 'Temco',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x3b3b30a76d169f72a0a38ae01b0d6e0fbee3cc2e',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'ATT',
        name: 'Antube Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0xbe7377db700664331beb28023cfbd46de079efac',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'CLB',
        name: 'Cloudbric',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0xdfb25178d7b59e33f7805c00c4a354ae1c46139a',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'PXL',
        name: 'Pixel',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x5425b810432bc7e7dbc74859ed3c37bb39d9df00',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'PIB',
        name: 'Pibble Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x6db4ff5c5312a745cb04a87d7906efe99d0daa3d',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'BPC',
        name: 'Blockpet Coin',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x9f11eca70167de3ab50b55806bd461123f16ff22',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'ABL',
        name: 'Airbloc Protocol',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x46f307b58bf05ff089ba23799fae0e518557f87c',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'XYZ',
        name: 'XYZ Token',
        decimals: 6,
        tokenAddresses: {
            [ChainId.Cypress]: '0x69eb6e14ce941d4d9d1c969dcf31bb105b7ae3d0',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'KIWI',
        name: 'Kiwi',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0xa35ee2cdd5e0423a5d40da66b69db612e2399e9b',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
];
