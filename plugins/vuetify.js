import Vue from "vue";
import Vuetify from "vuetify"; //<----

Vue.use(Vuetify); //<----
import "vuetify/dist/vuetify.min.css";

new Vue({
    vuetify: new Vuetify(), //<-----
}).$mount("#app");