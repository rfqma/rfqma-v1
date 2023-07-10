import React from "react";
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-auto">
                <div className="grow">
                    <Header />
                    <div className="m-5">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Layout
