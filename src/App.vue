<template>
    <div class="container">
        <h1>Macro Calculator</h1>
        <BMR />
        <TDEE />
        <YourGoals />
    </div>
</template>

<script>
import './scss/style.scss';
import BMR from './components/BMR';
import TDEE from './components/TDEE';
import YourGoals from './components/YourGoals';

export default {
    components: { BMR, TDEE, YourGoals },
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
    },
    watch: {
        gender(newValue, oldValue) {
            document.body.classList.remove(oldValue);
            document.body.classList.add(newValue);
        },
    },
};
</script>
