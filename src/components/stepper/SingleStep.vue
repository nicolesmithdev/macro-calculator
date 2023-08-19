<template>
    <div class="stepper-step">
        <div class="stepper-step-tab">
            <div class="stepper-step-tab-dot">{{ index + 1 }}</div>
            {{ step.label }}
        </div>
        <div v-if="active" class="stepper-step-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        step: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
};
</script>
