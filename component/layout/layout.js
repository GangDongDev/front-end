const { default: Header } = require("./header")
const { default: Sidebar } = require("./sidebar")

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <Sidebar />
        {/* @@ Container CSS */}
        {/* <div className={StyleSheet.container}> */}
        {children}
        {/* </div> */}
        </>
    )
}

export default Layout;