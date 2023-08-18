<template>
    <div class="bmr">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: '32',
            unit: true,
            weight: '148',
            height: '65',
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
        bmr() {
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
                formula = formula + 5;
            } else {
                formula = formula - 161;
            }
            this.$store.dispatch('PROP', { prop: 'bmr', value: formula });
            return formula;
        },
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin-bottom: 2rem;
}
</style>
