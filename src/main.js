import { mount } from 'svelte';
import App from './App.svelte';
import './Price.css'

const app = mount(App, {
	target: document.getElementById('app')
});

export default app;
