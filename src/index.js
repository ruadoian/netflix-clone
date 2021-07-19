import React from "react"
import RouterDom from "react-dom"
import {App} from "./App"
import {GlobalStyle} from "./global-styles"

RouterDom.render(
    <>
        <GlobalStyle/>
        <App/>
    </>
, document.getElementById("root"))