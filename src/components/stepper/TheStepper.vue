<template>
    <div class="stepper">
        <Step
            v-for="(step, i) in steps"
            :key="i"
            :step="step"
            :index="i"
            :active="i === modelValue"
            @click="$emit('update:modelValue', i)"
        >
            <component :is="step.component" />
        </Step>
    </div>
</template>

<script>
import Step from './SingleStep';
import BMR from '../BMR';
import TDEE from '../TDEE';
import YourGoals from '../YourGoals';
import TheResults from '../TheResults';

export default {
    components: { Step, BMR, TDEE, YourGoals, TheResults },
    props: ['modelValue'],
    data() {
        return {
            activityLevel: '1.2',
            steps: [
                {
                    label: 'Your Info',
                    component: BMR,
                },
                {
                    label: 'Activity Level',
                    component: TDEE,
                },
                {
                    label: "What's Your Goal?",
                    component: YourGoals,
                },
                {
                    label: 'Results',
                    component: TheResults,
                },
            ],
        };
    },
};
</script>
