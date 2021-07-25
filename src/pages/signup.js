import React,{useState} from "react"
import {Form} from "../components/"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import * as ROUTES from "../constants/routes"

export default function Signup(){
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, useError] = useState();

    const isInvalid = firstName ==="" | email ==="" | password === "" 

    const handleSignup = (e)=>{
        e.preventDefault()
    }

    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                <Form.Base type="POST" onSubmit={handleSignup}>
                    <Form.Input 
                        value={firstName} 
                        placeholder="Name"
                        onChange={({target}) => setFirstName(target.value)}
                        />

                    <Form.Input 
                        value={email} 
                        placeholder="Email Address"
                        onChange={({target}) => setEmail(target.value)}
                        />
                    <Form.Input 
                        value={password} 
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onChange={ ({target}) => setPassword(target.value)}
                        />

                    <Form.Submit disabled={isInvalid} type="submit">Sign up</Form.Submit>

                    <Form.Text>
                        Are you already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>    
        <FooterContainer/>    
        </>
    )
}