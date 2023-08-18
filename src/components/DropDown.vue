<template>
    <div class="dropdown">
        <label>{{ item.label }}</label>
        <button
            :class="{ active: toggle }"
            v-html="selectedOption"
            @click="toggle = !toggle"
        />
        <div v-if="toggle" class="dropdown-options">
            <div
                v-for="(option, i) in item.options"
                :key="i"
                :class="[
                    'dropdown-options-item',
                    { active: key == option.value },
                ]"
                @click="changeSelection"
                v-html="option.label"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            toggle: false,
        };
    },
    computed: {
        key() {
            return this.$store.getters.PROP(this.item.key);
        },
        selectedOption() {
            return this.item.options.filter(
                (option) => option.value == this.key
            )[0].label;
        },
    },
    methods: {
        changeSelection(event) {
            console.log('changeSelection', this.item.key, event.target.value);
            this.$store.dispatch('PROP', {
                prop: this.item.key,
                value: event.target.value,
            });
        },
    },
};
</script>
