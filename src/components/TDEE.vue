<template>
    <div class="tdee">
        <DropDown :item="item" />
        <h3 v-if="tdee">
            Your Total Daily Energy Expenditure (TDEE) is {{ this.tdee }}
        </h3>
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
            return Math.round(Number(this.bmr) * Number(this.activityLevel));
        },
    },
};
</script>
