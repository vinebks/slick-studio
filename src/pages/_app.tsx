import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles, theme } from '../styles';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../_layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Slick Studio</title>
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
