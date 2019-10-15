const mutations = {
	submitHandle(state, message) {
		if(state.counter > state.questions.length) {
			return;
		}

		if(message === '') {
			// eslint-disable-next-line
			console.error('A resposta não pode ser vazia');

			return;
		}

		state.answers[state.questions[state.counter].id] = message;

		state.counter = state.counter + 1;

		state.messages = [
			...state.messages,
			...[{message, user: true}],
			...[{message: state.questions[state.counter].message, ...(state.questions[state.counter].options ? {options: state.questions[state.counter].options} : {})}]
		];

		state.disableInput = state.questions[state.counter].disableInput ? state.questions[state.counter].disableInput : false;
	},
}

export default mutations;
