<template>
    <header class="flex item-center mx-12 ">
        <div class="flex items-center space-x-2  ">
            <img  alt="logo" loading="lazy" class="w-44 h-8 cursor-pointer" >
         </div>
        <div class="ml-auto">
            <div v-if="isUserLoggedIn"> UserX!</div>
            <div v-else>
                <button class="bg-white px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-100 cursor-pointer" @click="onhandleSigninSignUpFlow">
              {{ defaultState ? 'Sign In' :'Sign Up' }} 
                    </button>
               </div>
          </div>
        </header>
</template>

<script setup>
import { ref} from 'vue';
  


const isUserLoggedIn = ref(false)
const defaultState = ref(false)





</script>