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
                    label: '<strong>Sedentary;</strong> desk job, little exercise or housework',
                    value: '1.2',
                },
                {
                    label: '<strong>Mostly sedentary;</strong> some walking, aerobic exercise, and housework on most days',
                    value: '1.375',
                },
                {
                    label: '<strong>Moderately active;</strong> moderate exercise; standing job',
                    value: '1.55',
                },
                {
                    label: '<strong>Very active;</strong> vigorously exercising with a moderate to intense amount of effort 5-6 days per week or playing sports most days',
                    value: '1.725',
                },
                {
                    label: '<strong>Extra active;</strong> vigorous exercise 6-7 days per week such as training as an athlete plus a job that requires physical exertion',
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
