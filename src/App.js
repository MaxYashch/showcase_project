import React from "react";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";
import { ContextProvider } from "./context";

function App() {
    return (
        <>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </>
    );
}

export default App;

// cd /d/EPAM/REACT_PROGECTS/showcase_project/

// npm start      git add -A          git commit -m '      git push
