import { StoreAction } from '../classes/StoreAction';

export const simpleAction = () => (dispatch:any) => {
    const action:StoreAction = new StoreAction('SIMPLE_ACTION', 'result_of_simple_action');

    dispatch(action.getAsDispatch());
}