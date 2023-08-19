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
        <!-- <div class="stepper-step">
            <div class="stepper-step-tab">Tab</div>
            <div class="stepper-step-content">
                <DropDown :item="goal" />
            </div>
        </div> -->
    </div>
</template>

<script>
import Step from './SingleStep';
import BMR from '../BMR';
import TDEE from '../TDEE';
import DropDown from '../DropDown';
import TheResults from '../TheResults';

export default {
    components: { Step, BMR, TDEE, DropDown, TheResults },
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
                    label: 'TDEE',
                    component: TDEE,
                },
                {
                    label: 'Goals',
                    component: BMR,
                },
                {
                    label: 'Results',
                    component: TheResults,
                },
            ],
        };
    },
    computed: {
        goal() {
            return {
                key: 'goal',
                label: "What's your goal?",
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
    },
};
</script>
