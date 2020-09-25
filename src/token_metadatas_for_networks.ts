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
        symbol: 'KDAI',
        name: 'Klaytn Dai',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x5c74070fdea071359b86082bd9f9b3deaafbe32b',
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
        symbol: 'SIX',
        name: 'Six Network',
        decimals: 8,
        tokenAddresses: {
            [ChainId.Cypress]: '0xef82b1c6a550e730d8283e1edd4977cd01faf435',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'PXL',
        name: 'Piction Network',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x5425b810432bc7e7dbc74859ed3c37bb39d9df00',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'HINT',
        name: 'Hint Chain',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x8a4727b93d1644fc732bda43112bdd3cac7b686f',
            [ChainId.Baobab]: '0x2980e1ce342d9a234331abce8bb46f64b370ff50',
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
        symbol: 'ISR',
        name: 'Insureum Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x9657fb399847d85a9c1a234ece9ca09d5c00f466',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'TEMCO',
        name: 'Temco Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x3b3b30a76d169f72a0a38ae01b0d6e0fbee3cc2e',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'BOX',
        name: 'Inconvenience Box',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x5288f80f4145035866ac4cb45a4d8dea889ec827',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'PIB',
        name: 'Pibble App',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0xafde910130c335fa5bd5fe991053e3e0a49dce7b',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'XYZ',
        name: 'BlockNation XYZ',
        decimals: 6,
        tokenAddresses: {
            [ChainId.Cypress]: '0x69eb6e14ce941d4d9d1c969dcf31bb105b7ae3d0',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'CLBK',
        name: 'Cloudbric',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0xc4407f7dc4b37275c9ce0f839652b393e13ff3d1',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'MNR',
        name: 'SkyPeople Mineral',
        decimals: 6,
        tokenAddresses: {
            [ChainId.Cypress]: '0x27dcd181459bcddc63c37bab1e404a313c0dfd79',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'BNS',
        name: 'ThetaTV Beans',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x67b79df99416ad638267ec8d89eb61eae330a005',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'BPT',
        name: 'Blockchain PetToken',
        decimals: 2,
        tokenAddresses: {
            [ChainId.Cypress]: '0xb1a7abe0c5a9e06cc7585a435e74976d2dee07f3',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'BOLTT',
        name: 'Boltt Play',
        decimals: 8,
        tokenAddresses: {
            [ChainId.Cypress]: '0xa9cb7345db22034f607c12dd8e10ee703f6bad61',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'WIKEN',
        name: 'ProjectWith Wiken',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x275f942985503d8ce9558f8377cc526a3aba3566',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'SSX',
        name: 'Somesing Exchange',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0xdcd62c57182e780e23d2313c4782709da85b9d6c',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'DTA',
        name: 'Data Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x8177ac20455f31d8cb777923f0c632436568c719',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'ABL',
        name: 'Airbloc Token',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x46f307b58bf05ff089ba23799fae0e518557f87c',
            [ChainId.Baobab]: NULL_ADDRESS,
        },
    },
    {
        symbol: 'BFCK',
        name: 'Bitfrost Klay',
        decimals: 18,
        tokenAddresses: {
            [ChainId.Cypress]: '0x293073d135c3774145591bd2ccb04f3bccf52bee',
            [ChainId.Baobab]: NULL_ADDRESS,
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
    }
];
