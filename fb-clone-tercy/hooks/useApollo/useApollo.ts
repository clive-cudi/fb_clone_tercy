import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";
import { initApollo } from "../../graphql";

export function useApollo(initState: any): ApolloClient<NormalizedCacheObject>{
    const store = useMemo(()=>{
        return initApollo(initState);
    }, [initState]);

    return store;
}