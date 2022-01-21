import { createApp } from 'vue'
import App from './App.vue'
import UIComponents from '@/components/UI'

const app = createApp(App);

UIComponents.forEach(component => {
  app.component(component.name, component)  
});

app.mount('#app')
