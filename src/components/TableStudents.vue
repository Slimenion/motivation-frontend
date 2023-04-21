<template>
  <div>
    <table class="mt-4">
      <tr>
        <th>ID</th>
        <th>Логин</th>
        <th>ФИО</th>
        <th>Пол</th>
        <th>Факультет</th>
        <th>Группа</th>
        <th>Под группа</th>
        <th>ID эмоционального профиля</th>
        <th>ID мотивационной группы</th>
        <th>ID мотивационного профиля</th>
      </tr>
      <tr v-for="student in students"
          :key="student.id">
        <td>{{student.id}}</td>
        <td>{{student.login}}</td>
        <td>{{student.fullname}}</td>
        <td>{{student.gender}}</td>
        <td>{{student.faculty}}</td>
        <td>{{student.groupFaculty}}</td>
        <td>{{student.subGroupFaculty}}</td>
        <td>{{student.emotionalGroup}}</td>
        <td>{{student.motivationGroup}}</td>
        <td>{{student.motivationProfile}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableStudents',
  props: {
    students: Array
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}

table th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
}

table tr th:first-child {
  border-radius: 8px 0 0 8px;
}

table tr th:last-child {
  border-radius: 0 8px 8px 0;
}

table td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}

table tr:nth-child(even) {
  background: #f3f3f3;
}

table tr td:first-child {
  border-radius: 8px 0 0 8px;
}

table tr td:last-child {
  border-radius: 0 8px 8px 0;
}
</style>

<style>
.decor-big {
  max-width: 1024px !important;
}

.form-inner-big {
  padding: 50px 24px !important;
}
</style>