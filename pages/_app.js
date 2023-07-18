import Layout from "../component/layout/layout";

const App = ({Component, pageProps}) => {
    return (
        <>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </>
    )
}

export default App;