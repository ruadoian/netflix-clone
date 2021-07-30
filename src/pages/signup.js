import React,{useState, useContext} from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import {Form} from "../components/"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import * as ROUTES from "../constants/routes"


export default function Signup(){
    const history = useHistory()
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const {firebase} = useContext(FirebaseContext);

   

    const isInvalid = firstName ==="" | emailAddress ==="" | password === "" 

    const handleSignup = (e)=>{
        e.preventDefault()

        firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then(res => 
            res.user
            .updatedProfile({
                displayName:firstName,
                photoURL: Math.floor(Math.Random * 5)+1
            })
            .then(()=>{
                setEmail('');
                setError('');
                setPassword('');
                history.push(ROUTES.BROWSE)
            })
            ).catch(error => setError(error.message))
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
                        value={emailAddress} 
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