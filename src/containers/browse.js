import React,{useState, useContext} from "react"
import {Header} from "../components/"
import * as ROUTES from "../constants/routes"
import {FirebaseContext} from "../context/firebase"
import {FooterContainer} from "./footer"
import {SelectProfileContainer} from "./profile"

export function BrowseContainer(){
    const [profile, setProfile] = useState()
    const [category, setCategory] = useState('series')
    const [loading, setLoading] = useState()
    const [searchTerm, setSearchTerm] = useState('')

    const {firebase} = useContext(FirebaseContext)

    const user = {
        displayName:"Ian",
        photoURL:"usericon-1"
    }

    return profile ? 
        (<>
            <Header src="joker02" dontShowOnSamillViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo src="images/misc/netflix-logo-noBg.png" to={ROUTES.HOME} alt="netflix-logo" />
                        <Header.Link
                            active={category === "series" ? "true":"false"}
                            onClick={()=> setCategory('series')}
                        >
                            Series
                        </Header.Link>

                        <Header.Link
                            active={category ==="films"? "true":"false"}
                            onClick={()=>setCategory("films")}
                            >  
                            Films
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                        <Header.Picture src={user.photoUrl} alt="user-picture"/>
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoUrl} alt="user-picture" />
                                <Header.Link>{user.displayName}</Header.Link>
                            </Header.Group>
                            <Header.Group>
                                <Header.Link onClick={()=> firebase.auth().signOut()}>
                                        Sign Out
                                </Header.Link>
                            </Header.Group>
                        </Header.Dropdown>
                    
                    </Header.Group>
                </Header.Frame>

           
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>


                
                
            </Header>
            <FooterContainer/>
        </>):
        (<SelectProfileContainer user={user} setProfile={setProfile} />)
}