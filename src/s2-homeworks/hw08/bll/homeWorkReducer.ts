import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                state = state.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name))
            } else {
                state = state.sort((a: UserType, b: UserType) => b.name.localeCompare(a.name))
            }
            
            return state // need to fix
        }
        case 'check': {
            state = state.filter((value) => value.age > 18)
            return state // need to fix
        }
        default:
            return state
    }
}
