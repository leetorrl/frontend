<template>
  <div>
    <h1 class="text-3xl">홈</h1>

     <h1 class="text-3xl p-2 rounded mb-4"
      :class="counter.count === 10 ? 'bg-red-500' : 'bg-green-500'">count : {{counter.count}}</h1>
    <button class="bg-green-400 cursor-pointer" @click="counter.upcount">더하기</button>
    <button class="bg-amber-600 cursor-pointer" @click="counter.downcount">빼기</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useCounterStore} from '../stores/counterStore'

const counter = useCounterStore();


</script>