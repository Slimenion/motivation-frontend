<template>
  <div class="decor">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div class="form-inner">
      <h3>Система управления мотивационными группами студентов</h3>
      <router-link :to="{ name:'TableWithStudentsPage' }">
        <div class="but">
            Вывести всех студентов
        </div>
      </router-link>
      <router-link :to="{ name: 'AddStudentPage' }">
        <div class="but">
          Добавить студента
        </div>
      </router-link>
      <router-link :to="{ name: 'AddStudentsFromFilePage' }">
        <div class="but">
            Добавить много студентов через файл
        </div>
      </router-link>
      <router-link :to="{ name: 'AddTaskPage' }">
        <div class="but">
          Ввести задания
        </div>
      </router-link>
      <router-link :to="{ name: 'ShowStudentsWithTasks' }">
        <div class="but">
          Посмотреть у кого уже есть задания
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherMenuPage'

}
</script>
