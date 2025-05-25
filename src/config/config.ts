import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrumSepolia } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Batch 4 demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [arbitrumSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});