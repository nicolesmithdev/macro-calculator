<template>
    <div>
        <DropDown :item="item" />
    </div>
</template>

<script>
import DropDown from './DropDown';

export default {
    components: { DropDown },
    computed: {
        item() {
            return {
                key: 'goal',
                label: "What's your goal?",
                options: [
                    {
                        label: 'Lose',
                        value: 'lose',
                    },
                    {
                        label: 'Maintain',
                        value: 'maintain',
                    },
                    {
                        label: 'Gain',
                        value: 'gain',
                    },
                ],
            };
        },
    },
};
</script>
