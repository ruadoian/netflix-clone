import React from "react"
import RouterDom from "react-dom"
import {App} from "./App"
import {GlobalStyles} from "./global-styles"
import {FirebaseContext} from "./context/firebase"




const config={
    apiKey: "AIzaSyBe1jQdfmTegpVWqF8T1EgLFgoenElYof8",
    authDomain: "netflix-ruadoian.firebaseapp.com",
    databaseURL: "https://netflix-ruadoian-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "netflix-ruadoian",
    storageBucket: "netflix-ruadoian.appspot.com",
    messagingSenderId: "1087215540017",
    appId: "1:1087215540017:web:195fc7ac2e426260784210"
}

const firebase = window.firebase.initializeApp(config);


RouterDom.render(
    <>
    <FirebaseContext.Provider value={{firebase:window.firebase}}>
        <GlobalStyles/>
        <App/>
    </FirebaseContext.Provider>
    </>
, document.getElementById("root"))