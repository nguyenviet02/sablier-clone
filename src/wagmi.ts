import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { mainnet, sepolia, bsc, arbitrum, avalanche, base, blast, gnosis, iotex, lightlinkPhoenix, linea, optimism, polygon, scroll } from 'wagmi/chains';

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, bsc, arbitrum, avalanche, base, blast, gnosis, iotex, lightlinkPhoenix, linea, optimism, polygon, scroll],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [bsc.id]: http(),
      [arbitrum.id]: http(),
      [avalanche.id]: http(),
      [base.id]: http(),
      [blast.id]: http(),
      [gnosis.id]: http(),
      [iotex.id]: http(),
      [lightlinkPhoenix.id]: http(),
      [linea.id]: http(),
      [optimism.id]: http(),
      [polygon.id]: http(),
      [scroll.id]: http(),
    },
  });
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
