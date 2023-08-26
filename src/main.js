// 导入基本内容
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入vuestic
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

//导入图标
import "material-design-icons-iconfont/dist/material-design-icons.min.css";


// 导入路由
import { router } from './router'

createApp(App).use(router).use(createVuestic({
  config: {
    colors: {
      variables: {
        primary: '#FFCCCC'
      }
    }
  }
})).mount('#app')
