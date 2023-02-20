<template>
  <div class="flex flex-wrap max-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8 text-gray-400">
      <div>
        <h1 class="mt-6 text-center text-3xl font-bold tracking-tight">Welcome to my Star Wars Project</h1>
      </div>
      <div class="mt-8 space-y-6 justify-items-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aliquam debitis voluptatum officia repellendus ad minima recusandae porro. 
          Molestiae, qui ipsam inventore eius eum quis quisquam sequi cum quas debitis neque.
        </p>
      </div>
      <div>
        <button @click="toStarships" 
        class="relative flex w-full justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white
        hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
        Start</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComp',
  data () {
    return {

    }
  },
  methods: {
    toStarships() {
      this.$router.push('/starships')
    }
  }
}
</script>


<style scoped>

</style>
