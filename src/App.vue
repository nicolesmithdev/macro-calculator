<template>
    <div class="container">
        <h1>Macro Calculator</h1>
        <BMR />
        <TDEE />
        <h3 v-if="dailyCalories">Daily Calories: {{ this.dailyCalories }}</h3>
    </div>
</template>

<script>
import './scss/style.scss';
import BMR from './components/BMR';
import TDEE from './components/TDEE';

export default {
    components: { BMR, TDEE },
    data() {
        return {
            activityLevel: '1.2',
        };
    },
    beforeMount() {
        document.body.classList.add(this.gender);
    },
    computed: {
        gender() {
            return this.$store.getters.PROP('gender') ? 'female' : 'male';
        },
        bmr() {
            return this.$store.getters.PROP('bmr');
        },
        activityLevel() {
            return this.$store.getters.PROP('activityLevel');
        },
        tdee() {
            return Math.round(Number(this.bmr) * Number(this.activityLevel));
        },
        dailyCalories() {
            return this.tdee - 500;
        },
    },
    watch: {
        gender(newValue, oldValue) {
            document.body.classList.remove(oldValue);
            document.body.classList.add(newValue);
        },
    },
};
</script>
