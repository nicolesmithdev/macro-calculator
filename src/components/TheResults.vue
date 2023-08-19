<template>
    <div class="results">
        <h3 v-if="dailyCalories">Daily Calories: {{ this.dailyCalories }}</h3>
    </div>
</template>

<script>
export default {
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
