import React from "react";
import NavBar from "./components/NavBar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen min-w-screen bg-white font-black">
            <NavBar links={["Feed", "Digest"]} />
            {children}
        </div>
    )
}

export default Layout;