
import React from "react"
import "./styles.css";
export const Header = () => {
    return (
        <>
            <header className="flex align-items-center justify-content-center">  {/* bootstrap classes  */}
                <h1 onClick={() => window.location.reload()}>MARVEL<span style={{ marginLeft: '-4px' }}>CARD</span></h1>  {/*correcting font by approaching the word "card" to "marvel" by 4px. in <h1> style.css this value is discounted from the background with padding-right = (padding-left -4px).*/}
            </header>
        </>
    )
}