import React,{useState} from "react"
import {Form} from "../components/"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"


export default function Signin(){
    const [error, setError] = useState("");
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState('');

    const isInvalid = password === '' | emailAddress === '';

    const handleSignin = (e) =>{
        e.preventDefault();
    }



    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input 
                            value={emailAddress}
                            placeholder="Email or username"
                            onChange={({target}) => setEmailAddress(target.value)}   
                            />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({target}) => setPassword(target.value)}
                        />


                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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