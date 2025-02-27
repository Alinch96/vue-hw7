<template>
    <div class="grade-container">
        <label for="grade">Категорія</label>
        <select id="grade" v-model="grade">
            <option key="" value="">Не вибрано</option>
            <option key="excellent" value="excellent">Відмінник</option>
            <option key="good" value="good">Хорошист</option>
            <option key="average" value="average">Трієчник</option>
            <option key="law" value="law">Двієчник</option>
        </select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'GradeSelector',
    computed: {
        ...mapGetters(['getGrade']),
        grade: {
            get() {
                return this.getGrade
            },
            set(value) {
                this.setGrade(value)
            },
        },
    },
    methods: {
        ...mapActions(['setGrade']),
    },
}
</script>

<style lang="scss" scoped>
.grade-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 220px;

    label {
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }

    select {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            border-color: #007bff;
        }

        &:focus {
            outline: none;
            border-color: #0056b3;
            box-shadow: 0 0 5px rgba(0, 91, 187, 0.5);
        }
    }
}
</style>
