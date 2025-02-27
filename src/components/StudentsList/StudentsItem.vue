<template>
    <li class="students-list-item">
        <h3>{{ student.name }}</h3>
        <p>{{ getStudentMarkById(student.id) }}</p>
    </li>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StudentsItem',
    props: {
        student: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        ...mapGetters(['getStudentMarkById']),
    },
}
</script>

<style lang="scss" scoped>
.students-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    h3 {
        font-size: 18px;
        color: #333;
    }
    p {
        font-weight: 700;
        font-size: 24px;
        color: #2d23b8;
    }
}
</style>
