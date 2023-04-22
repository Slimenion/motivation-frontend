<template>
    <div class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
              <h5 v-if="isError" style="color: red">Произошла ошибка при отправке</h5>
              <h5 v-if="isSuccess" style="color: green">Тема успешно отправлена</h5>
              <h3>Ввести тему</h3>
              <input @click="resetAllErrorAndSuccess" ref="topic" class="mt-4" type="text" placeholder="Формулировка темы"/>
              <input type="button" @click="postTopic" value="Добавить" />
              <router-link :to="{ name: 'TeacherMenuPage' }">
                <div class='but'>
                  Вернуться к меню
                </div>
              </router-link>
        </div>
    </div>
</template>

<script>
import postTopic from "@/api/postTopic";

export default {
  name:'AddTopicPage',
    data() {
        return {
            showSubTasksInputs: false,
            isError: false,
            isSuccess: false,
        }
    },
  methods: {
    resetAllErrorAndSuccess() {
        this.isSuccess = false;
        this.isError = false;
    },
    async postTopic() {
        try {
            await postTopic({
                topic_title: this.$refs.topic.value,
            });

            this.$refs.topic.value = '';
            this.isSuccess = true;
        } catch (e) {
          console.log(e);
          this.isError = true;
        }
    }
  }
}
</script>
