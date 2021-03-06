import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import store from '@/store/store'
import eventHub from '@/plugins/EventHub'
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(eventHub)
Vue.config.productionTip = false

// TODO: FirebaseConfigファイルに切り出し
const firebaseConfig = {
  apiKey: "AIzaSyD_-nledmYw0J35BOOdwdDYCraaYYPcnVs",
  authDomain: "yoshio-app.firebaseapp.com",
  databaseURL: "https://yoshio-app.firebaseio.com",
  projectId: "yoshio-app",
  storageBucket: "yoshio-app.appspot.com",
  messagingSenderId: "640350051560",
  appId: "1:640350051560:web:712e70d7c1c61b96ba7d5d",
  measurementId: "G-8XPYJ0FX41"
};
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
}).$mount('#app')
