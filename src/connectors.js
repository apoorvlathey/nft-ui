import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const RPC_URLS = {
    1: process.env.MAINNET_URL,
    2: process.env.POLYGON_URL,
};

export const injected = new InjectedConnector({
    supportedChainIds: [1, 137]
});

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1], 137: RPC_URLS[2]}
});