import React, {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Layout from "@/components/layouts/Layout";
import "@/styles/styles.css"
import {ThemeProvider} from "@mui/material";
import {mainTheme} from "@/themes/mainTheme";
import {observer} from "mobx-react";
import {StoreProvider} from "@/store/StoreContext";
import rootStore from "@/store/RootStore";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}


function App({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => {
        return <Layout>{page}</Layout>
    })

    return (
        <StoreProvider value={rootStore}>
            <ThemeProvider theme={mainTheme}>
                {getLayout(<Component  {...pageProps} />)}
            </ThemeProvider>
        </StoreProvider>)
}


export default observer(App)