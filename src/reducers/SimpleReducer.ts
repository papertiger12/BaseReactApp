import { StoreAction } from '../classes/StoreAction';

const initialState = {

}

export default (state = initialState, action:StoreAction) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        default:
        return state
    }
}