const state = {
	answers: {},
	questions: [
		{
			message: 'What\'s your name?',
			id: 'name',
		},
		{
			message: 'How old are you?',
			id: 'age',
			options: [
				{
					label: '30',
					value: 30,
					name: 'age'
				},
				{
					label: '50',
					value: 50,
					name: 'age'
				},
				{
					label: '70',
					value: 70,
					name: 'age'
				}
			],
			disableInput: true,
		},
		{
			message: 'Where do you live?',
			id: 'place',
		},
		{
			message: 'Thanks! We\'ll get in touch soon :)',
			id: 'end',
		}
	],
	messages: [{
		message: 'What\'s your name?',
		id: 'name',
	}],
	counter: 0,
	disableInput: false,
};

export default state;
