import { ThemeConfig } from '../types';

export const themes: Record<string, ThemeConfig> = {
  dark: {
    name: 'Dark',
    colors: {
      bg: 'bg-gray-900',
      bgSecondary: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-blue-400',
      border: 'border-gray-700',
      terminal: 'bg-gray-900',
      terminalText: 'text-gray-300',
      prompt: 'text-blue-400',
    },
  },
  cyberpunk: {
    name: 'Cyberpunk',
    colors: {
      bg: 'bg-gray-900',
      bgSecondary: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-cyan-400',
      border: 'border-gray-700',
      terminal: 'bg-gray-900',
      terminalText: 'text-green-400',
      prompt: 'text-cyan-400',
    },
  },
  matrix: {
    name: 'Matrix',
    colors: {
      bg: 'bg-black',
      bgSecondary: 'bg-gray-900',
      text: 'text-green-400',
      textSecondary: 'text-green-300',
      accent: 'text-green-500',
      border: 'border-green-800',
      terminal: 'bg-black',
      terminalText: 'text-green-400',
      prompt: 'text-green-500',
    },
  },
  rose: {
    name: 'Rose',
    colors: {
      bg: 'bg-rose-950',
      bgSecondary: 'bg-rose-900',
      text: 'text-rose-100',
      textSecondary: 'text-rose-200',
      accent: 'text-rose-400',
      border: 'border-rose-800',
      terminal: 'bg-rose-950',
      terminalText: 'text-rose-400',
      prompt: 'text-rose-300',
    },
  },
  wood: {
    name: 'Wood',
    colors: {
      bg: 'bg-amber-950',
      bgSecondary: 'bg-amber-900',
      text: 'text-amber-100',
      textSecondary: 'text-amber-200',
      accent: 'text-amber-400',
      border: 'border-amber-800',
      terminal: 'bg-amber-950',
      terminalText: 'text-amber-400',
      prompt: 'text-amber-300',
    },
  },
  vault: {
    name: 'Vault',
    colors: {
      bg: 'bg-blue-950',
      bgSecondary: 'bg-blue-900',
      text: 'text-blue-100',
      textSecondary: 'text-blue-200',
      accent: 'text-blue-400',
      border: 'border-blue-800',
      terminal: 'bg-blue-950',
      terminalText: 'text-blue-400',
      prompt: 'text-blue-300',
    },
  },
};

export const getSystemInfo = () => {
  const nav = navigator;
  const screen = window.screen;
  
  return {
    browser: getBrowserInfo(),
    os: getOSInfo(),
    screen: `${screen.width}x${screen.height}`,
    colorDepth: `${screen.colorDepth}-bit`,
    language: nav.language,
    platform: nav.platform,
    cookieEnabled: nav.cookieEnabled,
    onlineStatus: nav.onLine ? 'Online' : 'Offline',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    memory: (nav as any).deviceMemory ? `${(nav as any).deviceMemory}GB` : 'Unknown',
  };
};

const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  return 'Unknown';
};

const getOSInfo = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS')) return 'iOS';
  return 'Unknown';
};