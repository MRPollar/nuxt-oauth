<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();

const loggedIn = computed(() => status.value == "authenticated")

async function handlerSingIn(){
  await signIn();
}

async function handlerSingOut(){
  await signOut();
}
</script>

<template>
  <div>
    <button v-if="loggedIn" @click="handlerSingOut">Sing Out</button>
    <button v-else @click="handlerSingIn">Sing In</button>
  </div>
</template>
