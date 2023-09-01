import { computed } from "vue";

const isLogin = computed(()=>!Boolean(localStorage.getItem('token')))

const bb =3

export {isLogin}