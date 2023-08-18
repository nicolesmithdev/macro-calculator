<template>
    <div class="activity-level">
        <label>Activity level</label>
        <button
            :class="['select', { active: showOptions }]"
            v-html="selectedActivityLevel"
            @click="showOptions = !showOptions"
        />
        <div v-if="showOptions" class="select-dropdown">
            <label v-for="(option, i) in options" :key="i" :for="option.value">
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
    data() {
        return {
            showOptions: false,
        };
    },
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
        selectedActivityLevel() {
            return this.options.filter(
                (option) => option.value == this.activityLevel
            )[0].label;
        },
    },
};
</script>
