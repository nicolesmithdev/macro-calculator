<template>
    <div class="container">
        <h1>Macro Calculator</h1>
        <BMR />
        <TDEE />
        <DropDown :item="goal" />
        <TheResults />
    </div>
</template>

<script>
import './scss/style.scss';
import BMR from './components/BMR';
import TDEE from './components/TDEE';
import DropDown from './components/DropDown';
import TheResults from './components/TheResults';

export default {
    components: { BMR, TDEE, DropDown, TheResults },
    data() {
        return {
            activityLevel: '1.2',
        };
    },
    beforeMount() {
        document.body.classList.add(this.gender);
    },
    computed: {
        gender() {
            return this.$store.getters.PROP('gender') ? 'female' : 'male';
        },
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
    watch: {
        gender(newValue, oldValue) {
            document.body.classList.remove(oldValue);
            document.body.classList.add(newValue);
        },
    },
};
</script>
