<template>
    <div class="flex max-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">SIGN UP</h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Username</label>
              <input id="email-address" name="username" v-model="form.username" type="text" autocomplete="email" required="" 
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" placeholder="Enter your username" />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" v-model="form.password" type="password" autocomplete="current-password" required="" 
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" placeholder="Enter your password" />
            </div>
          </div>  
          <div>
            <button type="button" @click="signUp(this.form)" class="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        name: 'signUp',
        data(){
            return {
                form: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            ...mapMutations('users', ['signUp'])
        }
    }
</script>