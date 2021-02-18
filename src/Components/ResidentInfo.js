import React from 'react'
import { RenderContent } from './Render'

export const ResidentInfo = ( {state} ) => {

    return (
        <>
            { state.map((element)=> {
        return <RenderContent key={ element.id } dates={ element } />
    }) }
        </>
    )
}
