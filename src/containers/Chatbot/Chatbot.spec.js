import {openBrowser, goto, focus, textBox, write, click, button, radioButton, closeBrowser} from 'taiko';

describe('<Chatbot />', () => {
	it('e2e test with taiko', async() => {
		try {
			await openBrowser();
			await goto("localhost:8080");
			await focus(textBox({name: 'userAnswer'}));
			await write("Julian");
			await click(button({class: '-send'}));
			await click(radioButton('30'));
			await focus(textBox({name: 'userAnswer'}));
			await write("Brazil");
			await click(button({class: '-send'}));
		} catch (error) {
				console.error(error);
		} finally {
				console.log('it works!');

				await closeBrowser();
		}
	});
});
