<template>
    <div class="results">
        <p v-if="dailyCalories">
            <strong>Daily Calores:</strong> {{ this.dailyCalories }} <br />
            <strong>Protein:</strong> {{ `${protein}g` }} <br />
            <strong>Carbs:</strong>
            {{ `${carbs}g` }}<br />
            <strong>Fats:</strong> {{ `${fats}g` }}
        </p>
        <div v-else>
            <p>Required fields missing</p>
            <ul>
                <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        age() {
            return this.$store.getters.PROP('age');
        },
        bmr() {
            return this.$store.getters.PROP('bmr');
        },
        activityLevel() {
            return this.$store.getters.PROP('activityLevel');
        },
        tdee() {
            return Math.round(Number(this.bmr) * Number(this.activityLevel));
        },
        goal() {
            return this.$store.getters.PROP('goal');
        },
        dailyCalories() {
            switch (this.goal) {
                case 'lose':
                    return this.tdee - 500;
                case 'gain':
                    return this.tdee + 500;
                default:
                    return this.tdee;
            }
        },
        weight() {
            return this.$store.getters.PROP('weight');
        },
        protein() {
            return Math.round(Number(this.weight) * Number(0.8));
        },
        carbs() {
            return Math.round(this.dailyCalories * 0.4 * 0.25);
        },
        fats() {
            let protein = this.protein * 4;
            let carbs = this.carbs * 4;
            return Math.round((this.dailyCalories - protein - carbs) * 0.111);
        },
        errors() {
            let errors = [];
            let keys = ['age', 'weight', 'height', 'activityLevel', 'goal'];
            keys.forEach((key) => {
                if (!this[key]) {
                    errors.push(key);
                }
            });
            return errors;
        },
    },
};
</script>
