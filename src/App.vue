<template>
    <div class="container">
        <h1>Macro Calculator</h1>
        <BMR />
        <ActivityLevel />
        <h3 v-if="tdee">
            Your Total Daily Energy Expenditure (TDEE) is {{ this.tdee }}
        </h3>
        <h3 v-if="dailyCalories">Daily Calories: {{ this.dailyCalories }}</h3>
    </div>
</template>

<script>
import './scss/style.scss';
import BMR from './components/BMR';
import ActivityLevel from './components/ActivityLevel';

export default {
    components: { BMR, ActivityLevel },
    data() {
        return {
            activityLevel: '1.2',
        };
    },
    computed: {
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
};
</script>
