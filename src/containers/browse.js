import React,{useState} from "react"
import {Header} from "../components/header/"
import * as ROUTE from "../constants/routes"
import {FirebaseContext} from "../context/firebase"
import {FooterContainer} from "./footer"
import {SelectProfileContainer} from "./profile"

export function BrowseContainer(){
    const [profile, setProfile] = useState()

    const user = {
        displayName:"Ian",
        photoURL:"usericon-1"
    }

    return profile ? 
        (<><p>Browse Container</p> <FooterContainer/></>):
        (<SelectProfileContainer user={user} setProfile={setProfile} />)
}