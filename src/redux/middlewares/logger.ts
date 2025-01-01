/* eslint-disable @typescript-eslint/no-explicit-any */
const logger = (state: any) => (next: any) => (action: any) => {
	console.log(state.getState());
	console.log(action);
	return next(action);
};

export default logger;
