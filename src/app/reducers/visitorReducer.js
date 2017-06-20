import React from "react";

 
const visitorReducer = (state={visitorName:"XYZ", discout:"10000"}, action) => {
	switch (action.type) {
		case 'ADD_VISITOR_FULFILLED':
			state = { 
			          ...state,
			          visitorName: action.payload
					};
			break;
		
	}
	return state;
};
 
export default visitorReducer;

