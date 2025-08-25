<template>
  <div>
   <h1>공통 레이아웃</h1>

    <router-link to="/">|홈</router-link>
      <router-link to="/first" class="ml-3">|FirstRouter</router-link>

      <hr class="my-4">

<router-view />

  </div>
</template>

<script setup>

</script>