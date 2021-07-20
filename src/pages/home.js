import React from "react"
import { OptForm, Features } from "../components/"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { FaqsContainer} from "../containers/faqs"
import { HeaderContainer } from "../containers/header"

export default function Home(){
    return(
        <>
        <HeaderContainer>
      
            <Features>
                <Features.Title>Unlimited films, TV Programmes and more</Features.Title>
                <Features.Subtitle>Watch anywhere, cancel anytime</Features.Subtitle>
                
                <OptForm>
                    <OptForm.Input placeholder="Email Address"></OptForm.Input>
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text> 
                </OptForm>
        </Features>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
       </>
    )
}
