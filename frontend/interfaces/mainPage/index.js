import Vue from 'vue'
import Main from './App'

const moment = require('moment');
require('moment/locale/ru');

moment.locale('ru');

Vue.prototype.$moment = moment;

new Vue(Main).$mount('#page');
