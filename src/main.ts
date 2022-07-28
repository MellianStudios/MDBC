import App from './App.vue';
import './index.css';
import languageBundle from './languageBundle';
import router from './router/index';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

console.log(languageBundle);
const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
    legacy: false,
    locale: 'sk',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: languageBundle,
});

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');
