import "./assets/main.css"
// Vue
import { createApp } from "vue"
// Pinia
import { createPinia } from "pinia"
// Vue Router
import router from "./router"
// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
// App
import App from "./App.vue"

const vuetify = createVuetify({
  components,
  directives
});

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app');
