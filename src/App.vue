<template>
    <div class="container">
        <h1>Macro Calculator</h1>
        <Stepper v-model="step" />
    </div>
</template>

<script>
import './scss/style.scss';
import Stepper from './components/stepper/TheStepper';

export default {
    components: { Stepper },
    data() {
        return {
            step: 0,
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
