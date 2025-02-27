import { createStore } from 'vuex'
import { studentsData, grades } from '../constants'

export default createStore({
    state() {
        return {
            students: studentsData,
            grade: "",
            evaluationSystem: 'system_12',
        }
    },
    getters: {
        getEvaluationSystem: ({ evaluationSystem }) => evaluationSystem,
        getGrade: ({ grade}) =>grade,
        getFilteredStudents: ({ students, grade }) => {
            if (!grade) return students;
            return students.filter(student => student.mark.system_5 === grades[grade])
        },
        getStudentMarkById:
            ({ students, evaluationSystem }) =>
            (id) =>
                students.find((student) => student.id === id).mark[evaluationSystem],
    },
    mutations: {
        setEvaluationSystem(state, value) {
          state.evaluationSystem = value;
    
        },
        setGrade(state, value) {
            state.grade = value;
        },
    },
    actions: {
        setEvaluationSystem(context, value) {
            context.commit('setEvaluationSystem', value)
        },
        setGrade(context, value) {
            context.commit('setGrade', value)
        },
    },
})
