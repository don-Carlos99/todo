<template>
  <div class="flex flex-row p-1 items-center">
    <i
      class="
        p-10
        mr-5
        text-gray-500
        hover:text-gray-100 hover:bg-emerald-300 hover:rounded-lg
      "
    >
      <slot name="icon"></slot>
    </i>
    <div class="">
      <h3 class="text-xl font-semibold text-gray-500">
        <slot name="heading"></slot>
      </h3>
      <div class="text-gray-400">
        <slot></slot>
      </div>
    <hr class="m-1">
    </div>
  </div>
</template>
