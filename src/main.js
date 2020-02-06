import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";
import "./permission"; // permission control

import 'element-ui/lib/theme-chalk/index.css'
import { Table, TableColumn, Tooltip , Popover, MessageBox } from "element-ui";

Vue.use(TableColumn);
Vue.use(Table);
Vue.use(Tooltip);
Vue.use(Popover);
Vue.config.productionTip = false;
Vue.use(ArgonDashboard);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
