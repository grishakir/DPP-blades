import React from "react";

export default function Layout({children}: { children: React.ReactElement }) {
    return (
        <>
            <header/>
            <main>{children}</main>
            <footer/>
        </>
    )
}