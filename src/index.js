import React from "react"
import RouterDom from "react-dom"
import {App} from "./App"
import {GlobalStyle} from "./global-styles"
import {FirebaseContext} from "./context/firebase"

const config={
    apiKey:'',
    authDomain:'',
    databaseURL:'',
    projectId:'',
    storageBucket:'',
    messegingSenderId:'',
    appId:''
}

const firebase = window.firebase.initializeApp(config);

RouterDom.render(
    <>
    <FirebaseContext.Provider value={{firebase:window.firebase}}>
        <GlobalStyle/>
        <App/>
    </FirebaseContext.Provider>
    </>
, document.getElementById("root"))