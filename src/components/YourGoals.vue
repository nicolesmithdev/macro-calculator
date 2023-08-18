<template>
    <div>
        <DropDown :item="item" />
        <h3 v-if="dailyCalories">Daily Calories: {{ this.dailyCalories }}</h3>
    </div>
</template>

<script>
import DropDown from './DropDown';

export default {
    components: { DropDown },
    computed: {
        item() {
            return {
                key: 'goal',
                label: "What's your goal?",
                options: [
                    {
                        label: 'Lose',
                        value: 'lose',
                    },
                    {
                        label: 'Maintain',
                        value: 'maintain',
                    },
                    {
                        label: 'Gain',
                        value: 'gain',
                    },
                ],
            };
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
};
</script>
