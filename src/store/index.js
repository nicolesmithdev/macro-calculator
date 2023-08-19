import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    state() {
        return {
            activeFilters: [],
            activityLevel: '',
            age: '',
            bmr: '',
            gender: true,
            goal: '',
            height: '',
            searchTerm: '',
            tdee: '',
            weight: '',
        };
    },
    mutations,
    actions,
    getters,
});

export default store;
