<template>
  <div class="flex flex-row-reverse z-10 h-56">
    <div class="absolute left-0 w-full">
      <div class="w-52 mx-auto h-36">
        <img :src="starWarsImage">
      </div>
    </div>
    <div class="z-50 flex flex-wrap self-center mr-16 text-gray-400">
      <router-link class="hover:text-gray-100 focus:text-gray-100"
       v-if="!this.authenticated" to="/login">LOG IN</router-link> <span class="text-gray-600 px-2 ">//</span>
      <router-link class="hover:text-gray-100 focus:text-gray-100"
       v-if="!this.authenticated" to="/signup">SIGN UP</router-link>
      <a class="cursor-pointer hover:text-gray-100"
      v-if="this.authenticated" @click="logout">LOG OUT</a>
    </div>
  </div>
  <div class="border-y border-gray-600 h-10 flex justify-center">
    <nav class="bg-black z-50 items-cente h-full flex justify-center text-gray-400">
      <router-link to="/" class="px-3 border-x border-gray-600 h-full hover:text-gray-100 hover:border-b-2 hover:border-b-blue-500 
      focus:border-b-2 focus:border-b-blue-500 focus:text-gray-100 focus:font-semibold">
        <span class="">HOME</span></router-link>
      <router-link to="/starships" class="px-3 border-r border-gray-600 h-full hover:text-gray-100 hover:border-b-2 hover:border-b-blue-500
      focus:border-b-2 focus:border-b-blue-500 focus:text-gray-100 focus:font-semibold">
        <span class="">STARSHIPS</span></router-link>
    </nav>
  </div>
  <router-view/>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import starWarsImage from '@/assets/star-wars-2.svg';

  export default {
    data() {
      return {
        starWarsImage: starWarsImage
      }
    },
    computed: {
      ...mapState('users', ['users', 'authenticated'])
    },
    methods: {
      ...mapMutations('users', ['logout']),
      ...mapMutations(['initialiseStore'])
    },
    mounted(){
      this.initialiseStore();
    }
  }
</script>

<style>
  .navItemBorder {
    border: 1px solid #343434;
  }
</style>