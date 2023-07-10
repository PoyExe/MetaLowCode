import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import scui from './ml'
import i18n from './locales'
import router from './router'
import App from './App.vue'
import pinia from './sotre'
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.use(scui);

//挂载app
app.mount('#app');
