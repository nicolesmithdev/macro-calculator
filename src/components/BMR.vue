<template>
    <div class="bmr">
        <div class="form-control">
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
        <div class="form-control">
            <label for="age">Age</label>
            <input v-model="age" type="number" pattern="\d*" id="age" />
        </div>
        <div class="form-control">
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
        <div class="form-control">
            <label>Weight</label>
            <input
                v-model="weight"
                type="number"
                pattern="\d*"
                id="weight"
                :placeholder="unit ? 'lbs' : 'kg'"
            />
        </div>
        <div class="form-control">
            <label for="height">Height</label>
            <input
                v-model="height"
                type="number"
                pattern="\d*"
                id="height"
                :placeholder="unit ? 'in' : 'cm'"
            />
        </div>
        <h2>
            Your BMR is: <strong>{{ this.bmr }}</strong>
        </h2>
        <p class="desc">
            Your Basal Metabolic Rate (BMR) is the absolute minimum number of
            calories your body needs to function at rest.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            unit: true,
        };
    },
    computed: {
        gender: {
            get() {
                return this.$store.getters.PROP('gender');
            },
            set(value) {
                this.$store.dispatch('PROP', { prop: 'gender', value });
            },
        },
        age: {
            get() {
                return this.$store.getters.PROP('age');
            },
            set(value) {
                this.$store.dispatch('PROP', { prop: 'age', value });
            },
        },
        weight: {
            get() {
                return this.$store.getters.PROP('weight');
            },
            set(value) {
                this.$store.dispatch('PROP', { prop: 'weight', value });
            },
        },
        height: {
            get() {
                return this.$store.getters.PROP('height');
            },
            set(value) {
                this.$store.dispatch('PROP', { prop: 'height', value });
            },
        },
        bmr() {
            if (!this.age || !this.weight || !this.height) {
                return '';
            }
            /**
             * Mifflin St. Jeor formula
             * BMR = (9.99 x weight (kg) + 6.25 x height (cm) – 4.92 x age + gender) kcal/day
             * gender is +5 for males, -161 for females
             */
            let wgt = this.weight;
            let hgt = this.height;
            if (this.unit === true) {
                wgt = this.weight / 2.2046;
                hgt = this.height * 2.54;
            }
            // (10 x weight in kg) + (6.25 x height in cm)
            let formula = Math.round(9.99 * wgt + 6.25 * hgt - 4.92 * this.age);
            if (this.gender) {
                // if female, subtract 161
                formula = formula - 161;
            } else {
                // if male, add 5
                formula = formula + 5;
            }
            this.$store.dispatch('PROP', { prop: 'bmr', value: formula });
            return formula;
        },
    },
};
</script>
