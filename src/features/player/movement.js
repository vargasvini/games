import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

export default function handleMovement(player){
    

    function getNewPosition(direction){
        const oldPos = store.getState().player.position
        switch(direction){
            case 'WEST':
                return [oldPos[0]-SPRITE_SIZE,oldPos[1]]
            case 'NORTH':
                return [oldPos[0],oldPos[1]-SPRITE_SIZE]  
            case 'EAST':
                return [oldPos[0]+SPRITE_SIZE,oldPos[1]]
            case 'SOUTH':
                return [oldPos[0],oldPos[1]+SPRITE_SIZE]      

        }
    }

    function observeBoundaries(oldPos, newPos){
        return  ((newPos[0] >= 0 && newPos[0] < MAP_WIDTH) && (newPos[1] >= 0 && newPos[1] < MAP_HEIGHT)) 
                ? newPos : oldPos
    }

    function dispatchMove(direction){
        const oldPos = store.getState().player.position
        store.dispatch({
            type: 'MOVE_PLAYER',
            teste:{
                position: observeBoundaries(oldPos, getNewPosition(direction)),
                name:'teste',
                level: 2,
                
            }
        })
    }

    function handleKeyDown(e){
        e.preventDefault()
        
        switch(e.keyCode){
            case 37:
                return dispatchMove('WEST')
            case 38:
                return dispatchMove('NORTH')
            case 39:
                return dispatchMove('EAST')
            case 40:
                return dispatchMove('SOUTH')
            default: 
                return console.log(e.keyCode)
        }  
    }

    window.addEventListener('keydown', (e)=>{
        handleKeyDown(e)
    })

    return player
}