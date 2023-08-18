<template>
    <div class="tdee">
        <DropDown :item="item" />
        <h2>
            Your TDEE is: <strong>{{ this.tdee }}</strong>
        </h2>
        <div class="desc">
            <p>
                Your Total Daily Energy Expenditure (TDEE) is the number of
                calories it takes yo support your BMR plus physical activity.
            </p>
            <p>
                If you want to <strong>lose weight</strong>, you must consume
                less than your TDEE. If you want to
                <strong>maintain</strong> your current weight, your TDEE would
                be your daily calories. If you want to
                <strong>gain muscle</strong>, you must eat in a calorie surplus.
            </p>
        </div>
    </div>
</template>

<script>
import DropDown from './DropDown.vue';

export default {
    components: { DropDown },
    computed: {
        item() {
            return {
                key: 'activityLevel',
                label: 'Activity level',
                options: [
                    {
                        label: '<strong>Sedentary</strong> desk job, little to no exercise',
                        value: '1.2',
                    },
                    {
                        label: '<strong>Light</strong> some exercise 1-3x week',
                        value: '1.375',
                    },
                    {
                        label: '<strong>Moderate</strong> exercise 3-5x week',
                        value: '1.55',
                    },
                    {
                        label: '<strong>Active</strong> vigorous exercising 5-6x week',
                        value: '1.725',
                    },
                    {
                        label: '<strong>Athlete</strong> vigorous exercise 6-7x week',
                        value: '1.9',
                    },
                ],
            };
        },
        activityLevel() {
            return this.$store.getters.PROP('activityLevel');
        },
        bmr() {
            return this.$store.getters.PROP('bmr');
        },
        tdee() {
            if (!this.bmr && !this.activityLevel) {
                return '';
            }
            return Math.round(Number(this.bmr) * Number(this.activityLevel));
        },
    },
};
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 1rem;
}
</style>
