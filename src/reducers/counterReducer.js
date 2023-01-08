import ActionTypes from '../constants/actionTypes';

const initialState = {
	count: 0,
}
const counterReducer = (state=initialState, action) => {
	const {	type, payload } = action;
	switch (type){
		case ActionTypes.ADD_COUNTER:
			return {...state, count: state.count + 1}
		case ActionTypes.SUBTRACT_COUNTER:
			return {...state, count: state.count - 1}
		case ActionTypes.ADD_COUNTER_BY:
			return {...state, count: state.count + payload}
		default:
			return state;
	}

}

export default counterReducer;