<template>
  <div id="app">
		<Chatbot />
  </div>
</template>

<script>
import Chatbot from './containers/Chatbot/Chatbot';

export default {
  name: 'app',
  components: {
		Chatbot,
  }
}
</script>

<style>
html, body {
	padding: 0;
	margin: 0;
}

* {
	box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
