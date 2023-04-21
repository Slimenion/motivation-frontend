<template>
    <div>
        <add-mobile-student/>
        <add-student @add-student="addStudent"/>
    </div>
</template>

<script>
import {postOneStudent} from "@/api/postOneStudent";
import AddStudent from "@/components/AddStudent.vue";
import AddMobileStudent from "@/components/AddMobileStudent.vue";
export default {
    name:'AddStudentPage',
    components: { AddStudent, AddMobileStudent },
    data(){
        return{
            student:{},
            studentMobile:{}
        }
    },
    methods:{
        async addStudent(student){
            const response = await postOneStudent(student);
            console.log(response)
        }
    }
}
</script>
