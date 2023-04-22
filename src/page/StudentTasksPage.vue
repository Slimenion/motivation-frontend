<template>
    <div class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
            <h3>Ваши задания</h3>
        </div>
    </div>
    <div v-for="task in tasks" :key="task.id" class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
            <h4>{{ task.task }}</h4>
            <h5 class="mt-4">Тема задания: {{task.topic_title}}</h5>
            <div class="mt-4" v-if="task.subTask && motivationProfile > 3">
                <h5>Подзадачи:</h5>
                <ul>
                    <li v-for="subtask in splitSubtasks(task)" :key="subtask">{{ subtask }}</li>
                </ul>
            </div>
            <div class="mt-4" v-if="task.deadline && motivationProfile > 1">
                <h5>Срок сдачи задачи:</h5>
                <p>{{ task.deadline }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import fetchingTasks from "@/api/fetchingTasks";
import Cookie from "js-cookie";
import getMotivationProfileById from "@/api/getMotivationProfileById";

export default {
    name: "StudentTasksPage",
    data() {
        return {
            tasks: [],
            motivationProfile: 0,
        }
    },
    async mounted() {
        this.tasks = await fetchingTasks(Cookie.get('login'));
        this.motivationProfile = await getMotivationProfileById(Cookie.get('login'));
    },
    methods: {
        splitSubtasks(subtaskString) {
            return subtaskString.subTask.split('$endtask$')
        }
    }
}
</script>

<style scoped>

</style>