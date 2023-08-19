<template>
    <ul class="options-list">
        <li
            v-for="(option, i) in options"
            :key="i"
            :class="{ active: option.value === goal }"
        >
            {{ option.label }}
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
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
    computed: {
        goal() {
            return this.$store.getters.PROP('goal');
        },
    },
};
</script>
