<template>
  <div>
    <div class="decor">
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">
        <h5 v-if="showError" style="color: red">Введен не верный логин или пароль</h5>
        <input class="login-text-field mt-4" type="text" placeholder="Логин"/>
        <input class="password-text-field" type="password" placeholder="Пароль"/>
        <input class="btn" type="button" value="Войти" @click="login"/>
      </div>
    </div>
  </div>
</template>

<script>
import postLogin from "@/api/postLogin";
import Cookie from "js-cookie";
import getRole from "@/api/getRole";
import {router} from "../../router";
export default {
  name: 'LoginPage',
  data() {
    return {
      showError: false,
    }
  },
  methods: {
    async login() {
      const loginText = this.$el.querySelector('.login-text-field').value.trim();
      const passwordText = this.$el.querySelector('.password-text-field').value.trim();

      try {
        let token = await postLogin({username: loginText, password: passwordText});
        token = token.token;
        Cookie.set('token', token);
        Cookie.set('login', loginText);

        const role = await getRole(token);

        if (role.role === "teacher") {
          await router.push({name: 'TeacherMenuPage'})
        } else {
          await router.push({name: 'StudentTasksPage'})
        }
      } catch(e) {
        this.showError = true;
      }
    }
  }
}
</script>
