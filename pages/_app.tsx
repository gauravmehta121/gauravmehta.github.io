import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
