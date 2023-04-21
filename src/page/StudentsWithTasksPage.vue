<template>
    <div class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
            <h3>Студенты с заданиями:</h3>
            <ol class="mt-4">
                <li v-for="student in students" :key="student.login">{{student.fullname}}</li>
            </ol>
        </div>
    </div>
</template>

<script>

import fetchingStudentsWithTasks from "@/api/fetchingStudentsWithTasks";

export default {
    name: "StudentsWithTasksPage",
    data() {
        return {
            students: [],
        }
    },
    async mounted() {
        this.students = await fetchingStudentsWithTasks();
        console.log(this.students);
    },
}
</script>

<style scoped>

</style>