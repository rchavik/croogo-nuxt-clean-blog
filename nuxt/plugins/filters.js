import Vue from 'vue'

Vue.filter('date_format', (value) => {
  let date = new Date(value);
  return date.toLocaleString()
})
