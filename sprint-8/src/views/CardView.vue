<template>
    <div class="flex flex-wrap justify-center text-4xl font-bold my-7">
      <h1>{{ $route.params.name }}</h1>
    </div>
    <StarshipCard></StarshipCard>
</template>

<script>
  import StarshipCard from '@/components/Card.vue'

  export default {
    name: 'StarshipsCardView',
    components: {
      StarshipCard
    }
  }

</script>