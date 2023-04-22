import TeacherMenuPage from "@/page/TeacherMenuPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/page/LoginPage.vue";
import AddStudentPage from "@/page/AddStudentPage.vue";
import TableWithStudentsPage from "@/page/TableWithStudentsPage.vue";
import AddStudentsFromFilePage from "@/page/AddStudentsFromFilePage.vue";
import ErrorPage from "@/page/ErrorPage.vue";
import AddTaskPage from "@/page/AddTaskPage.vue";
import StudentTasksPage from "@/page/StudentTasksPage.vue";
import Cookie from 'js-cookie';
import StudentsWithTasksPage from "@/page/StudentsWithTasksPage.vue";
import AddTopicPage from "@/page/AddTopicPage.vue";

const routes = [
    {
        path: '/teacher-menu',
        name: 'TeacherMenuPage',
        component: TeacherMenuPage,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
        alias: '/',
    },
    {
        path: '/add-student',
        name:'AddStudentPage',
        component: AddStudentPage
    },
    {
        path: '/table-with-students',
        name:'TableWithStudentsPage',
        component: TableWithStudentsPage
    },
    {
        path: '/add-students-from-file',
        name:'AddStudentsFromFilePage',
        component: AddStudentsFromFilePage
    },
    {
        path: '/add-task',
        name: 'AddTaskPage',
        component: AddTaskPage,
    },
    {
        path: '/student-tasks',
        name: 'StudentTasksPage',
        component: StudentTasksPage
    },
    {
        path: '/show-students-with-tasks',
        name: 'ShowStudentsWithTasks',
        component: StudentsWithTasksPage,
    },
    {
        path: '/add-topic',
        name: 'AddTopicPage',
        component: AddTopicPage,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'ErrorPage',
        component: ErrorPage
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async to => {
    const isAuthenticated = Cookie.get('token');

    if (
        !isAuthenticated &&
        to.name !== 'LoginPage'
    ) {
        return { name: 'LoginPage' }
    }
})