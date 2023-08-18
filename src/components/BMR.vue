<template>
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
    <h3 v-if="weight">Your Basal Metabolic Rate (BMR) is: {{ this.bmr }}</h3>
</template>

<script setup>
import { ref, computed } from 'vue';

const gender = ref(true);
const unit = ref(true);
const weight = ref('148');
const height = ref('65');
const age = ref('30');

const bmr = computed(() => {
    /**
     * Mifflin St. Jeor formula
     * BMR = (9.99 x weight (kg) + 6.25 x height (cm) – 4.92 x age + gender) kcal/day
     * gender is +5 for males, -161 for females
     */
    let wgt = weight;
    let hgt = height;
    if (unit === 'imperial') {
        wgt = weight / 2.2046;
        hgt = height * 2.54;
    }
    // (10 x weight in kg) + (6.25 x height in cm)
    let formula = Math.round(9.99 * wgt + 6.25 * hgt - 4.92 * age);
    if (gender === 'male') {
        return formula + 5;
    }
    return formula - 161;
});
</script>
