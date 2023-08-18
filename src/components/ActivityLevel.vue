<template>
    <div>
        <label>Activity level</label>
        <div class="radio-group d-block">
            <label for="1.2" :class="radioClasses('activityLevel', '1.2')">
                <input
                    type="radio"
                    v-model="activityLevel"
                    id="1.2"
                    value="1.2"
                />
                Sedentary; desk job, little exercise or housewework
            </label>
            <label for="1.55" :class="radioClasses('activityLevel', '1.55')">
                <input
                    type="radio"
                    v-model="activityLevel"
                    id="1.55"
                    value="1.55"
                />
                Moderately active; moderate exercise; standing job
            </label>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        radioClasses(prop, value) {
            let classes = ['radio-item'];
            if (this[prop] == value) {
                classes.push('active');
            }
            return classes;
        },
    },
};
</script>
