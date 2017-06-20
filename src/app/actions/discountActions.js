export function addDiscount(amount) {
	return {
		type:"ADD_DISCOUNT",
		payload:new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(amount);
			},4000);
		})
	};
}