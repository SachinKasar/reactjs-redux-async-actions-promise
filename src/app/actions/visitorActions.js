export function addVisitor(name) {
	//return {
	//	type:"ADD_VISITOR",
	//	payload:name
	//};
	
	return {
		type:"ADD_VISITOR",
		payload:new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(name);
			},4000);
		})
	};
}