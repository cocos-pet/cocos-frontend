import React from 'react';
import type { AppProps } from 'next/app';
import '@style/global.css.ts';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
} 