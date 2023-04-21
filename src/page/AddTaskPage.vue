<template>
    <div class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
              <h5 v-if="isError" style="color: red">Произошла ошибка при отправке</h5>
              <h5 v-if="isSuccess" style="color: green">Задача успешно отправлена</h5>
              <h3>Ввести задание</h3>
              <input @click="resetAllErrorAndSuccess" ref="task" class="mt-4" type="text" placeholder="Полная формулировка задания"/>
              <input type="button" value="Добавить подзадачу" @click="addSubTasksInputs" />
              <div v-if='showSubTasksInputs' class="sub-tasks">
                  <h5>Подзадачи к заданию</h5>
                  <div class="sub-tasks-inputs"></div>
              </div>
                  <h5 class="mt-4">Добавить срок сдачи задания</h5>
                <input ref="deadline" class="mt-2 deadline" type="date" placeholder="Текст подзадачи" />
              <input type="button" @click="postTask" value="Добавить" />
              <router-link :to="{ name: 'TeacherMenuPage' }">
                <div class='but'>
                  Вернуться к меню
                </div>
              </router-link>
        </div>
    </div>
</template>

<script>
import postTask from "@/api/postTask";
import Cookie from "js-cookie";

export default {
  name:'AddTaskPage',
    data() {
        return {
            showSubTasksInputs: false,
            isError: false,
            isSuccess: false,
        }
    },
  methods: {
    addSubTasksInputs() {
        const subTaskElem = document.createElement('div');

        this.showSubTasksInputs = true;

        subTaskElem.classList.add('mt-2');
        subTaskElem.innerHTML = `<input class="sub-task-input" type="text" placeholder="Текст подзадачи" />`;

        this.$nextTick(() => {
            this.$el.querySelector('.sub-tasks-inputs').before(subTaskElem);
        });
    },
    resetAllErrorAndSuccess() {
        this.isSuccess = false;
        this.isError = false;
    },
    async postTask() {
        try {
            let subTask = '';
            const subTasksElem = document.querySelectorAll('.sub-task-input');
            if (subTasksElem) {
                subTasksElem.forEach((subTaskElem, index) => {
                    subTask += index !== 0 ? `$endtask$${subTaskElem.value}` : subTaskElem.value;
                    subTaskElem.value = '';
                })
            }

            await postTask({
                login: Cookie.get('login'),
                task: this.$refs.task.value,
                subTask,
                deadline: this.$refs.deadline.value,
            });

            this.$refs.task.value = '';
            this.$refs.deadline.value = '';

            document.querySelectorAll('.sub-task-input').forEach(elem => {elem.remove()});

            this.isSuccess = true;
        } catch (e) {
          console.log(e);
          this.isError = true;
        }
    }
  }
}
</script>
