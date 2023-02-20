<template>
    <div class="flex flex-wrap justify-evenly my-28">
        <div class="flex-col">
            <h4 class="text-xl font-semibold">
                MODEL: 
            </h4>
            <p class="text-gray-400">
                {{ starshipCard.model }}
            </p>
            <h4 class="text-xl font-semibold">
                STARSHIP CLASS: 
            </h4>
            <p class="text-gray-400">
                {{ starshipCard.starship_class }}
            </p>
            <h4 class="text-xl font-semibold">
                MANUFACTURER: 
            </h4>
            <p class="text-gray-400">
                {{ starshipCard.manufacturer }}
            </p>
            <h4 class="text-xl font-semibold">
                COST: 
            </h4>
            <p class="text-gray-400">
                {{ starshipCard.cost_in_credits }} CREDITS
            </p>
        </div>
        <div class="">
            <h4 class="text-xl font-semibold">CREW: </h4><p class="text-gray-400">{{ starshipCard.crew }}</p>
            <h4 class="text-xl font-semibold">PASSENGERS CAPACITY: </h4><p class="text-gray-400">{{ starshipCard.passengers }}</p>
            <h4 class="text-xl font-semibold">CARGO CAPACITY: </h4><p class="text-gray-400">{{ starshipCard.cargo_capacity }} TONS</p>
            <h4 class="text-xl font-semibold">CONSUMABLES: </h4><p class="text-gray-400">{{ starshipCard.consumables }}</p>
        </div>
        <div>
            <h4 class="text-xl font-semibold">LENGTH: </h4><p class="text-gray-400">{{ starshipCard.length }} METERS</p>
            <h4 class="text-xl font-semibold">MAXIMUM ATMOSPHERING SPEED: </h4><p class="text-gray-400">{{ starshipCard.max_atmosphering_speed }} KM/H</p>
            <h4 class="text-xl font-semibold">HYPERDRIVE RATING: </h4><p class="text-gray-400">{{ starshipCard.hyperdrive_rating }}</p>
            <h4 class="text-xl font-semibold">MAXIMUM SPEED IN REAL SPACE: </h4><p class="text-gray-400">{{ starshipCard.MGLT }} MGLT</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name: 'StarshipCard',
        computed: {
            ...mapState(['starshipCard'])
        },
        
    }
</script>