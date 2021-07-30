import React from "react"
import {Spinner, LockBody, ReleaseBody, Picture} from "./styles/loading"

export default function Loading({src, ...restProps}){
    return  <Spinner {...restProps}>
                <LockBody/>
                <Picture src={`images/icons/${src}.png`}/>
            </Spinner>
}

Loading.ReleaseBody = function LoadingRealeseBody({children, ...restProps}){
    return <ReleaseBody {...restProps}>{children}</ReleaseBody>
}