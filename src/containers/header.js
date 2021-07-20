import React from "react"
import {Header} from "../components"
import * as ROUTES from "../constants/routes"

export function HeaderContainer({children}){
        return (
            <Header>
                <Header.Frame>
                    <Header.Logo href={ROUTES.HOME} src="/images/misc/netflix-logo-noBg.png" alt="Netflix Logo" />
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>SignIn</Header.ButtonLink>
                </Header.Frame>
                {children}
            </Header>
        )
}