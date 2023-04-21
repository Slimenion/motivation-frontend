<template>
    <div>
        <div class="decor">
            <div class="form-left-decoration"></div>
            <div class="form-right-decoration"></div>
            <div class="circle"></div>
            <div class="form-inner">
                <h3>Ввести новых студентов через .txt файл</h3>
                <input type="file" @change="changeTxt"/>
                <input type="button" value="Добавить" @click.prevent="uploadTxt"/>
                <router-link :to="{ name: 'TeacherMenuPage' }">
                    <div class='but'>Вернуться к меню</div>
                </router-link>
            </div>
        </div>
        <div class="decor">
            <div class="form-left-decoration"></div>
            <div class="form-right-decoration"></div>
            <div class="circle"></div>
            <div class="form-inner">
                <h3>Ввести новых студентов через xml файл</h3>
                <input type="file" name="xmlFile"/>
                <input type="button" value="Добавить"/>
                <router-link :to="{ name: 'TeacherMenuPage' }">
                    <div class='but'>Вернуться к меню</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {postTxt} from "@/api/postFileStudents";

export default {
    name: 'AddStudentsFromFilePage',
    data(){
        return{
            txt: null,
            xml:null
        }
    },
    methods:{
        changeTxt(event){
            const file = event.target.files[0];
            if(file){
                this.txt = file;
            }
        },
        async uploadTxt(){
            await postTxt(this.txt);
        }
    }
}
</script>
