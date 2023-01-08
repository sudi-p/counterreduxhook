import ActionTypes from '../constants/actionTypes';

const incrementCounterAction = () => (dispatch)=> {
	dispatch({
		type: ActionTypes.ADD_COUNTER,
	})
} 
export default incrementCounterAction;

export const subtractCounterAction = () => (dispatch)=> {
	dispatch({
		type: ActionTypes.SUBTRACT_COUNTER,
	})
}

export const addCounterByAction = (num) => (dispatch) => {
	dispatch({
		type: ActionTypes.ADD_COUNTER_BY,
		payload: num,
	})
}