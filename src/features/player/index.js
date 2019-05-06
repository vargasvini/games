import React from 'react'
import { connect } from 'react-redux'
import walkSprite from '../player/player_walk.png'
import handleMovement from '../player/movement'

function Player(props){
    return(
        <div>
            <div style={{
                    position: 'absolute',
                    top: props.position[1]-15,
                    left: props.position[0],
                    backgroundPositionX: 0,
                    backgroundPositionY: 0,
                    width: '100px',
                    height: '40px'
                }}>
                {props.name} / {props.level}
            </div>
            <div id='playerLayoutDiv'
                style={{
                    position: 'absolute',
                    top: props.position[1],
                    left: props.position[0],
                    backgroundImage: `url(${walkSprite})`,
                    backgroundPositionX: 0,
                    backgroundPositionY: 0,
                    width: '40px',
                    height: '40px'
                }}
            />
        </div>
    )
}

function mapStateToProps(state){
    return{
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));