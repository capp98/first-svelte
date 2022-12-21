export const load = ({ params }) => {
	console.log(params);
	return {
		title: 'Svelt',
		text: `Svelt é bacana ${params.id}`
	};
};
