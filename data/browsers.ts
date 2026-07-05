export interface BrowserInfo {
  name: string;
  icon: string;
}

export const browsers = {
  chrome: { name: 'Google Chrome', icon: '/browsers/chrome.svg' },
  edge: { name: 'Microsoft Edge', icon: '/browsers/edge.svg' },
  safari: { name: 'Safari', icon: '/browsers/safari.svg' },
  firefox: { name: 'Mozilla Firefox', icon: '/browsers/firefox.svg' },
} as const satisfies Record<string, BrowserInfo>;

export type BrowserId = keyof typeof browsers;
