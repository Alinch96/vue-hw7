<template>
    <div class="students-list-wrapper">
        <h2>Список студентів</h2>
        <ul class="students-list">
            <students-item v-for="student in getFilteredStudents" :key="student.id" :student="student" />
        </ul>
    </div>
</template>

<script>
import StudentsItem from './StudentsItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'StudentsList',
    components: {
        StudentsItem,
    },
    computed: {
        ...mapGetters(['getFilteredStudents']),
    },
}
</script>

<style lang="scss" scoped>
.students-list-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;

    .students-list {
        width: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        background-color: #f8f9fa;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
}
</style>
