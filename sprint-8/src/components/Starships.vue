<template>
    <div v-if="starships.length > 0"
        class="bg-black flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-700 w-full max-w-md text-gray-400 m-3 py-4 px-10 rounded whitespace-nowrap text-left"
        v-for="(starship, index) in starships" :key="index">
            <router-link @click="storeStarship(index)" :to="{name: 'starship-card', params:{name: starship.name}}" 
            class=" text-xl font-semibold hover:text-gray-100">
                {{ starship.name }}
            </router-link>
            <p>
                {{ starship.model }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    name: 'starShips',
    created() {
         if (this.starships.length == 0) {
            this.fetchStarshipsRaw()
         }
        
    },
    mounted() {
        this.scroll()
    },
    computed: {
        ...mapState(['starships', 'starshipsRaw'])
    },
    methods: {
        ...mapActions(['fetchStarshipsRaw']),
        ...mapMutations(['storeStarship', 'nextPage']),
        scroll () {
            window.onscroll = () => {
            let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

            if (bottomOfWindow) {
                this.nextPage();
                this.fetchStarshipsRaw();
            }
            };
        }
    },
    unmounted() {
        window.onscroll = null
    }
}
</script>