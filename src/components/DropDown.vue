<template>
    <div class="dropdown">
        <label>{{ item.label }}</label>
        <button
            :class="{ active: toggle }"
            v-html="selectedOption"
            @click="toggle = !toggle"
        />
        <div v-if="toggle" class="dropdown-options">
            <label
                v-for="(option, i) in item.options"
                :key="i"
                :for="option.value"
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
        key: {
            get() {
                return this.$store.getters.PROP(this.item.key);
            },
            set(value) {
                this.$store.dispatch('PROP', { prop: this.item.key, value });
            },
        },
        selectedOption() {
            return this.item.options.filter(
                (option) => option.value == this.key
            )[0].label;
        },
    },
};
</script>
