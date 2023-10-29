// 导入基本内容
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入vuestic
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

//导入图标
import "material-design-icons-iconfont/dist/material-design-icons.min.css";

// 导入Quasar
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// 导入路由
import { router } from './router'

createApp(App).use(router).use(Quasar, { // Quasar配置
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
}).use(createVuestic({
  config: {
    colors: {
      variables: {
        primary: '#FFCCCC'
      }
    }
  }
})).mount('#app')
