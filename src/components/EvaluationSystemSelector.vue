<template>
    <div class="evaluation-container">
        <label for="evaluation">Система оцінювання</label>
        <select id="evaluation" v-model="evaluationSystem">
            <option key="12" value="system_12">12</option>
            <option key="5" value="system_5">5</option>
        </select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'EvaluationSystemSelector',
    computed: {
        ...mapGetters(['getEvaluationSystem']),
        evaluationSystem: {
            get() {
                return this.getEvaluationSystem
            },
            set(value) {
                this.setEvaluationSystem(value)
            },
        },
    },
    methods: {
        ...mapActions(['setEvaluationSystem']),
    },
}
</script>

<style lang="scss" scoped>
.evaluation-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 200px;

    label {
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }

    select {
        padding: 8px;
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
