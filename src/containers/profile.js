import React,{useState} from "react"
import * as ROUTE from "../constants/routes"
import {Header, Profiles} from "../components/"
import { Route } from "react-router"
import userEvent from "@testing-library/user-event"


export function SelectProfileContainer({user, setProfile}){
    return(
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo    
                        to={ROUTE.HOME}
                        src="/images/misc/netflix-logo-noBg.png"
                        alt="netflix-logo"
                        />
                </Header.Frame>
                <Profiles>
                    <Profiles.Title>Who's watching?</Profiles.Title>
                    <Profiles.List>
                        <Profiles.User 
                            onClick={()=> setProfile({
                                displayName:user.displayName,
                                photoURL: user.photoURL
                            })}>        
                            <Profiles.Picture src={user.photoURL} />
                            <Profiles.Name>{user.displayName}</Profiles.Name>
                        </Profiles.User>
                    </Profiles.List>
                </Profiles>
            </Header>
        </>
    )
}