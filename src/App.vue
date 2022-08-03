<template>
    <div class="container">
        <h2>Determine your BMR</h2>
        <div>
            <label>I am a...</label>
            <input v-model="gender" type="radio" id="male" value="male" />
            <label for="male">Male</label>
            <input v-model="gender" type="radio" id="female" value="female" />
            <label for="female">Female</label>
        </div>
        <div>
            <label>Unit of Measurement</label>
            <input v-model="unit" type="radio" id="metric" value="metric" />
            <label for="metric">Metric (cm)</label>
            <input v-model="unit" type="radio" id="imperial" value="imperial" />
            <label for="imperial">Imperial (lbs)</label>
        </div>
        <div>
            <label
                >Your Weight (in
                {{ this.unit === 'imperial' ? 'lbs' : 'kg' }})</label
            >
            <input v-model="weight" type="text" id="weight" />
        </div>
        <div>
            <label for="height"
                >Your Height (in
                {{ this.unit === 'imperial' ? 'inches' : 'cm' }})</label
            >
            <input v-model="height" type="text" id="height" />
        </div>
        <div>
            <label for="age">Age</label>
            <input v-model="age" type="text" id="age" />
        </div>
        <h3 v-if="weight">Your BMR is: {{ this.bmr }}</h3>
    </div>
</template>

<script>
import './scss/style.scss';
export default {
    data() {
        return {
            gender: 'female',
            unit: 'imperial',
            weight: '',
            height: '',
            age: '',
        };
    },
    computed: {
        bmr() {
            let weight = this.weight;
            let height = this.height;
            if (this.unit === 'imperial') {
                weight = this.weight / 2.2046;
                height = this.height * 2.54;
            }
            // (10 x weight in kg) + (6.25 x height in cm)
            let formula = 10 * weight + 6.25 * height - 5 * this.age;
            if (this.gender === 'male') {
                return formula + 5;
            }
            return Math.round(formula - 161);
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    margin-bottom: 1rem;
}
</style>
