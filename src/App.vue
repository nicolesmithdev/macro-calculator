<template>
    <div class="container">
        <h1>Macro Calculator</h1>
        <div class="row">
            <div>
                <label>I am a...</label>
                <div class="toggle-switch">
                    <label>
                        <input v-model="gender" type="checkbox" />
                        <span
                            class="slider"
                            :data-label="!gender ? 'male' : 'female'"
                        ></span>
                    </label>
                </div>
            </div>
            <div>
                <label for="age">Age</label>
                <input v-model="age" type="text" id="age" />
            </div>
        </div>
        <div class="row">
            <div>
                <label>Units</label>
                <div class="toggle-switch">
                    <label>
                        <input v-model="unit" type="checkbox" />
                        <span
                            class="slider"
                            :data-label="!unit ? 'metric' : 'imperial'"
                        ></span>
                    </label>
                </div>
            </div>
            <div>
                <label>Weight</label>
                <input
                    v-model="weight"
                    type="text"
                    id="weight"
                    :placeholder="unit ? 'lbs' : 'kg'"
                />
            </div>
            <div>
                <label for="height">Height</label>
                <input
                    v-model="height"
                    type="text"
                    id="height"
                    :placeholder="unit ? 'in' : 'cm'"
                />
            </div>
        </div>
        <h3 v-if="weight">
            Your Basal Metabolic Rate (BMR) is: {{ this.bmr }}
        </h3>
        <ActivityLevel />
        <h3 v-if="tdee">
            Your Total Daily Energy Expenditure (TDEE) is {{ this.tdee }}
        </h3>
        <h3 v-if="dailyCalories">Daily Calories: {{ this.dailyCalories }}</h3>
    </div>
</template>

<script>
import './scss/style.scss';
import ActivityLevel from './components/ActivityLevel';
export default {
    components: { ActivityLevel },
    data() {
        return {
            gender: false,
            unit: false,
            weight: '',
            height: '',
            age: '',
            activityLevel: '1.2',
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
            let formula = Math.round(
                10 * weight + 6.25 * height - 5 * this.age
            );
            if (this.gender === 'male') {
                return formula + 5;
            }
            return formula - 161;
        },
        tdee() {
            return Math.round(Number(this.bmr) * Number(this.activityLevel));
        },
        dailyCalories() {
            return this.tdee - 500;
        },
    },
};
</script>

<style lang="scss" scoped>
.container > div {
    margin-bottom: 2rem;
}
</style>
