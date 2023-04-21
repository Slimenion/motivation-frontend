<template>
  <div class="decor">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div class="form-inner">
      <h3>Ввести нового студента</h3>
      <input class="mt-4" type="text" v-model="fio" placeholder="ФИО" name="Fio"/>
      <select name="Gender" v-model="gender">
        <option value="Мужской" selected>Мужской</option>
        <option value="Женский">Женский</option>
        <option value="Боевой вертолет">Боевой вертолет</option>
        <option value="Оно не определилось">
          Оно не определилось
        </option>
      </select>
      <select name="Faculty" v-model="faculty">
        <option value="ФКТиПМ">ФКТиПМ</option>
        <option value="НЕ ФКТиПМ">НЕ ФКТиПМ</option>
      </select>
      <input type="text" placeholder="Группа" v-model="group" name="Group_faculty"/>
      <input
          type="text"
          v-model="subGroup"
          placeholder="Подгруппа"
          name="Sub_Group_faculty"
      />
      <p>Общий МП:</p>
      <select name="overall_mp" v-model="overall">
        <option value="Прогрессивный">Прогрессивный</option>
        <option value="Регрессивный">Регрессивный</option>
        <option value="Импульсивный">Импульсивный</option>
        <option value="Экспресивный">Экспресивный</option>
        <option value="Мотивационо всеядный">
          Мотивационо всеядный
        </option>
        <option value="Мотивационо равнодушный">
          Мотивационо равнодушный
        </option>
      </select>
      <p>Общий общежитейский МП:</p>
      <select name="overall_dorm_mp" v-model="overallDorm">
        <option value="Прогрессивный">Прогрессивный</option>
        <option value="Регрессивный">Регрессивный</option>
        <option value="Импульсивный">Импульсивный</option>
        <option value="Экспресивный">Экспресивный</option>
        <option value="Мотивационо всеядный">
          Мотивационо всеядный
        </option>
        <option value="Мотивационо равнодушный">
          Мотивационо равнодушный
        </option>
      </select>
      <p>Общий учебный МП:</p>
      <select name="overall_teaching_mp" v-model="overallTeaching">
        <option value="Прогрессивный">Прогрессивный</option>
        <option value="Регрессивный">Регрессивный</option>
        <option value="Импульсивный">Импульсивный</option>
        <option value="Экспресивный">Экспресивный</option>
        <option value="Мотивационо всеядный">
          Мотивационо всеядный
        </option>
        <option value="Мотивационо равнодушный">
          Мотивационо равнодушный
        </option>
      </select>
      <p>Идеальный общежитейский МП:</p>
      <select name="dream_dorm_mp" v-model="dreamDorm">
        <option value="Прогрессивный">Прогрессивный</option>
        <option value="Регрессивный">Регрессивный</option>
        <option value="Импульсивный">Импульсивный</option>
        <option value="Экспресивный">Экспресивный</option>
        <option value="Мотивационо всеядный">
          Мотивационо всеядный
        </option>
        <option value="Мотивационо равнодушный">
          Мотивационо равнодушный
        </option>
      </select>
      <p>Реальный общежитейский МП:</p>
      <select name="real_dorm_mp" v-model="realDorm">
        <option value="Прогрессивный">Прогрессивный</option>
        <option value="Регрессивный">Регрессивный</option>
        <option value="Импульсивный">Импульсивный</option>
        <option value="Экспресивный">Экспресивный</option>
        <option value="Мотивационо всеядный">
          Мотивационо всеядный
        </option>
        <option value="Мотивационо равнодушный">
          Мотивационо равнодушный
        </option>
      </select>
      <p>Идеальный учебный МП:</p>
      <select name="dream_teaching_mp" v-model="dreamTeaching">
        <option value="Прогрессивный">Прогрессивный</option>
        <option value="Регрессивный">Регрессивный</option>
        <option value="Импульсивный">Импульсивный</option>
        <option value="Экспресивный">Экспресивный</option>
        <option value="Мотивационо всеядный">
          Мотивационо всеядный
        </option>
        <option value="Мотивационо равнодушный">
          Мотивационо равнодушный
        </option>
      </select>
      <p>Реальный учебный МП:</p>
      <select name="real_teaching_mp" v-model="realTeaching">
        <option value="Прогрессивный">Прогрессивный</option>
        <option value="Регрессивный">Регрессивный</option>
        <option value="Импульсивный">Импульсивный</option>
        <option value="Экспресивный">Экспресивный</option>
        <option value="Мотивационо всеядный">
          Мотивационо всеядный
        </option>
        <option value="Мотивационо равнодушный">
          Мотивационо равнодушный
        </option>
      </select>
      <p>Эмоциональный профиль:</p>
      <select name="ep" v-model="ep">
        <option value="1">Стенический</option>
        <option value="2">Астенический</option>
        <option value="3">Смешанный стенический</option>
        <option value="4">Смешанный астенический</option>
      </select>
      <input type="button" class="btn" @click.prevent="addOneStudent" value="Добавить"/>
      <router-link :to="{ name: 'TeacherMenuPage' }">
        <div class='but'>
          Вернуться к меню
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddStudent',
  data() {
    return {
      fio: '',
      gender: 'Мужской',
      faculty: 'ФКТиПМ',
      subGroup: '',
      group: '',
      overall: '',
      overallDorm: '',
      overallTeaching: '',
      dreamDorm: '',
      realDorm: '',
      dreamTeaching: '',
      realTeaching: '',
      ep: ''
    }
  },
  emits: ['addStudent'],
  methods: {
    addOneStudent() {
      this.$emit('addStudent', this.$data);
      this.$router.push('/');
    }
  }
}
</script>
