<template>
  <div class="decor decor-big">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div class="form-inner form-inner-big">
      <h3>Все студенты:</h3>
      <table-students :students="students"/>
      <get-file/>
      <router-link :to="{ name: 'TeacherMenuPage' }">
        <div class='but'>
          Вернуться к меню
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import TableStudents from "@/components/TableStudents";
import GetFile from "@/components/GetFile";
import fetchingStudents from "@/api/fetchingStudents";

export default {
  name: 'TableWithStudentsPage',
  components: {GetFile, TableStudents},
  data() {
    return {
      students: []
    }
  },
  async mounted() {
    this.students = await fetchingStudents()
  }
}
</script>
