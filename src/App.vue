<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="flex h-screen">
    <div class="flex flex-col w-full">
      <div class="mx-auto mt-40">
        <img
          alt="Vue logo"
          class=""
          src="@/assets/logo.svg"
          width="150"
          height="150"
        />
      </div>
      <div class="mx-auto mt-10">
        <HelloWorld msg="You did it!" />
        <nav class="flex justify-between px-1 m-3 text-sm space-x-2">
          <RouterLink
            to="/"
            class="
              p-1
              hover:text-gray-100
              focus:text-gray-100
              hover:bg-emerald-300 hover:rounded-lg
              focus:bg-emerald-300 focus:rounded-lg
            "
            >Home</RouterLink
          >
          <RouterLink
            to="/about"
            class="
              p-1
              hover:text-gray-100
              focus:text-gray-100
              hover:bg-emerald-300 hover:rounded-lg
              focus:bg-emerald-300 focus:rounded-lg
            "
            >About</RouterLink
          >
          <RouterLink
            to="/todo"
            class="
              p-1
              hover:text-gray-100
              focus:text-gray-100
              hover:bg-emerald-300 hover:rounded-lg
              focus:bg-emerald-300 focus:rounded-lg
            "
            >Todo</RouterLink
          >
          <RouterLink
            to="/todoaxi"
            class="
              p-1
              hover:text-gray-100
              focus:text-gray-100
              hover:bg-emerald-300 hover:rounded-lg
              focus:bg-emerald-300 focus:rounded-lg
            "
            >Axious</RouterLink
          >
          <RouterLink
            to="/todols"
            class="
              p-1
              hover:text-gray-100
              focus:text-gray-100
              hover:bg-emerald-300 hover:rounded-lg
              focus:bg-emerald-300 focus:rounded-lg
            "
            >Local Storage</RouterLink
          >
          <RouterLink
            to="/todovuex"
            class="
              p-1
              hover:text-gray-100
              focus:text-gray-100
              hover:bg-emerald-300 hover:rounded-lg
              focus:bg-emerald-300 focus:rounded-lg
            "
            >State Management</RouterLink
          >
          <RouterLink
            to="/todoql"
            class="
              p-1
              hover:text-gray-100
              focus:text-gray-100
              hover:bg-emerald-300 hover:rounded-lg
              focus:bg-emerald-300 focus:rounded-lg
            "
            >GraphQL</RouterLink
          >
        </nav>
      </div>
    </div>
    <div class="w-full p-11">
      <RouterView />
    </div>
  </div>
</template>
