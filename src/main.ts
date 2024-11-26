import { createApp } from 'vue';
import App from './App.vue';

// 引入 Element Plus 和样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';

const app = createApp(App);

// 使用 Element Plus
app.use(ElementPlus);
app.use(router);

app.mount('#app');
