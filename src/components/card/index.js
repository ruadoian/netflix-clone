import React,{useContext, useState, useEffect, createContext} from "react"
import { 
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureText,
    FeatureTitle,
    FeatureClose,
    Maturity,
    Meta,
    Entities,
    Content,
    Item,
    Image} from "./styles/card"

const FeatureContext = createContext()

export default function Card({children, ...restProps}){
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false)
    return  <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
                <Container {...restProps}>{children}</Container>
            </FeatureContext.Provider>
}

Card.Group = function CardGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Card.Entities = function CardEntities({children, ...restProps}){
    return <Entities {...restProps}>{children}</Entities>
}

Card.Item = function CardItem({item, children, ...restProps}){
    const {setShowFeature, setItemFeature} = useContext(FeatureContext)
 
    return(
        <Item
            onClick={()=> {
                setShowFeature(true);
                setItemFeature(item);
            }}
            {...restProps}
        >
            {children}
        </Item>
    )

}
Card.Image = function CardImage({ ...restProps}){
    return <Image {...restProps} />
}

Card.Feature = function CardFeature({category, children, ...restProps}){
    const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext)
    return showFeature ? (
    <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
        <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            
            <FeatureClose onClick={() => setShowFeature(false)}>
                <img src="/images/icons/close.png" alt="Close" />
            </FeatureClose>
            
            <Group margin="30px 0" flexDirection="row" alignItems="center">
                <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                
            </Group>
            
            {children}
        </Content>
    </Feature>
    ):null;
}

Card.Meta = function CardMeta({children, ...restProps}){
    return <Meta {...restProps}>{children}</Meta>
}

Card.Text = function CardText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Card.SubTitle = function CardSubtite({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Title = function CardTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}