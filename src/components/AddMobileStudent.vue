<template>
  <div class="decor">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div class="form-inner">
      <h3>Ввести через код нового студента</h3>
      <input class="mt-4" type="text" placeholder="Код из мобильного приложения" name="strMobile" />
      <input type="button" @click.prevent value="Добавить" />
      <router-link :to="{ name: 'TeacherMenuPage' }">
        <div class='but'>Вернуться к меню</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'AddMobileStudent'
}
</script>
