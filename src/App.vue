<template>
  <div class="app-container">
 <students-list />
 <grade-selector />
 <evaluation-system-selector/>
</div>
</template>


<script>
import StudentsList from '@/components/StudentsList';
import GradeSelector from '@/components/GradeSelector.vue';
import EvaluationSystemSelector from '@/components/EvaluationSystemSelector.vue';



export default {
  name: "App",
  components: {
    StudentsList, GradeSelector, EvaluationSystemSelector
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  display: flex;
  align-items: flex-start;
  gap: 72px;
  padding: 20px;
  background-color: #eef2f3;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
