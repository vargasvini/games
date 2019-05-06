const initialState = {
    position: [0, 0],
    name: 'Vini',
    level: 120
}

const playerReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'MOVE_PLAYER':
            return{
                ...action.teste
            }
        default: return state
    }
}

export default playerReducer