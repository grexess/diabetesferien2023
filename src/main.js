import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Parse from 'parse/dist/parse.min.js';

// Import our custom CSS
import './scss/styles.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

Parse.initialize('7PzeU2cmYFKLbLnpHzZAfe');
Parse.serverURL = 'https://www.diabetesferien.de/parse';

function guardMyroute(to, from, next) {
	if (Parse.User.current() && Parse.User.current().authenticated()) {
		next(); // allow to enter route
	} else {
		next('/login'); // go to '/login';
	}
}

// define routing views
const routes = [
	{
		path: '/',
		name: 'Start',
		beforeEnter: guardMyroute,
		component: () => import('./views/StartView.vue'),
	},
	{
		path: '/children',
		name: 'Children',
		beforeEnter: guardMyroute,
		component: () => import('./views/ChildrenList.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('./views/LoginView.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

createApp(App).use(router).mount('#app');
