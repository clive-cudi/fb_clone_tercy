import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useApollo } from '../hooks';
import { ApolloClient, NormalizedCacheObject ,ApolloProvider } from '@apollo/client';
import { ModalCtxProvider } from '../providers';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ModalCtxProvider>
        <Component {...pageProps} />
      </ModalCtxProvider>
    </ApolloProvider>
  )
}

export default MyApp;
