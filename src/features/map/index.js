import React from 'react'
import { SPRITE_SIZE } from '../../config/constants';
import './mapStyle.css'

function getTileSprite(type){
    switch (type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'

    }
}

function MapTile(props){
    return( 
        <div 
            className={`tile ${getTileSprite(props.tile)}`}
            style={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE
            }}
        >
        {/* {props.tile} */}
        </div>
    )
}

function MapRow(props){
    return <div className="row">
        {
            props.tiles.map(tile => <MapTile tile={tile} />)
        }
        </div>
}

function Map(props){
    return(
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width:'800px',
                height:'400px',
                border: '4px solid white'
            }}
        >
            {
                props.tiles.map(row => 
                                <MapRow tiles={row}/>)
            }
        </div>
    )
}

export default Map