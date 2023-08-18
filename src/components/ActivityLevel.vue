<template>
    <div>
        <label>Activity level</label>
        <div class="radio-group d-block">
            <label
                v-for="(option, i) in options"
                :key="i"
                :for="option.value"
                :class="radioClasses('activityLevel', option.vaue)"
            >
                <input
                    type="radio"
                    v-model="activityLevel"
                    :id="option.value"
                    :value="option.value"
                />
                <span v-html="option.label" />
            </label>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        activityLevel: {
            get() {
                return this.$store.getters.PROP('activityLevel');
            },
            set(value) {
                this.$store.dispatch('PROP', { prop: 'activityLevel', value });
            },
        },
        options() {
            return [
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
            ];
        },
    },
    methods: {
        radioClasses(prop, value) {
            let classes = ['radio-item'];
            if (this[prop] == value) {
                classes.push('active');
            }
            return classes;
        },
    },
};
</script>
