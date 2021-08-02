import React,{useState} from "react"
import {Link as ReachRouterLink} from "react-router-dom"
import { 
    Background, 
    Container, 
    Link, 
    Group, 
    Logo, 
    ButtonLink,
    Feature,
    PlayButton,
    FeatureCallOut,
    Text,
    Search,
    SearchIcon,
    SearchInput,
    Picture,
    Dropdown,
    Profile
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps}/>
        </ReachRouterLink>
    )
}

Header.Text = function HeaderText({children, ...restProps}){
    return(<Text {...restProps}>{children}</Text>)
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return (<Group {...restProps}>{children}</Group>)
}

Header.Link = function HeaderLink({children, ...restProps}){
    return (<Link {...restProps}>{children}</Link>)
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return (<Feature {...restProps}>{children}</Feature>)
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return (<PlayButton {...restProps}>{children}</PlayButton>)
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return (<FeatureCallOut {...restProps}>{children}</FeatureCallOut>)
}

Header.Search = function SearchHeader({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={()=> setSearchActive(!searchActive)}>
                <img src={"/images/icons/search-icon.png"} alt="search-icon" />
            </SearchIcon>
            
            <SearchInput
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                active={searchActive}
                placeholder="Search for films and series"
            />
        </Search>
    )
}


Header.Picture = function PictureHeader({src, ...restProps}){
    return <Picture src={`/images/icons/${src}.png`} {...restProps} alt="Icon Pictre"/>
}

Header.Profile =function HeaderProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown =function HeaderDropdown({children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}