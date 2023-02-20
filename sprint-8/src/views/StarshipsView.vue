<template>
  <div class="starships">
    <starShips></starShips>
  </div>
</template>

<script>
  import starShips from '@/components/Starships.vue'

  export default {
    name: 'StarShipsView',
    components: {
      starShips
    }
  }
</script>
