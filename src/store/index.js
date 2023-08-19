import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    state() {
        return {
            activeFilters: [],
            activityLevel: '1.55',
            bmr: '',
            gender: true,
            goal: 'maintain',
            searchTerm: '',
            tdee: '',
            weight: '148',
        };
    },
    mutations,
    actions,
    getters,
});

export default store;
