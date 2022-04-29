import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';


let apolloClient;

const httpLink = createHttpLink({
    uri: `http://localhost:4000/`
})


export function createApolloClient(){
    return new ApolloClient({
        ssrMode: typeof window == "undefined",
        link: httpLink,
        cache: new InMemoryCache()
    })
};

export function initApollo(initState = null){
    const _apolloClient = createApolloClient();

    if (initState){
        const existingCache = _apolloClient.extract();

        _apolloClient.cache.restore({...existingCache, ...initState});
    }

    if (typeof window == "undefined") {
        return _apolloClient;
    }
    
    if (!apolloClient) {
     apolloClient = _apolloClient;   
    }

    return _apolloClient;
}