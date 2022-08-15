<template>
  <div class="m-3 space-x-4">
    <div class="flex space-x-2">
      <div class="w-full bg-slate-100 rounded-lg p-3">
        <div class="text-[10px] ml-3 text-gray-300">ID : {{ id }}{{detailToggle}}</div>
        <div class="flex">
          <p class="p-3 text-emerald-500 text-2xl">Task |</p>
          <p class="p-3 text-gray-500 text-2xl">{{ header }}</p>
        </div>
        <div v-if="detailToggle" class="flex text-sm">
          <p class="p-3 text-gray-400">{{ task }}</p>
        </div>
        <div class="flex m-3 text-xs">
          <p class="m-auto text-gray-500">
            Created By : {{ createdBy }}
          </p>
          <p class="m-auto text-gray-500"> | </p>
          <p :class="statusRender.text" class="m-auto">
            Status : {{ status }}
          </p>
        </div>
        <div class="flex m-3">
          <button
            class="
              text-xs
              m-auto
              text-orange-500
              hover:border-b-orange-500
              border-2 border-transparent
            "
            @click="showDetail"
          >
            More Details
          </button>
          <button
            class="
              text-xs
              m-auto
              text-blue-500
              hover:border-b-blue-500
              border-2 border-transparent
            "
            @click="$emit('upstatus', { id: id, d: 'Edited' })"
          >
            Edit
          </button>
          <button
            class="
              text-xs
              m-auto
              text-rose-500
              hover:border-b-rose-500
              border-2 border-transparent
            "
            @click="$emit('del', id)"
          >
            Delete
          </button>
          <button
            class="
              text-xs
              m-auto
              text-emerald-500
              hover:border-b-emerald-500
              border-2 border-transparent
            "
            @click="$emit('upstatus', { id: id, d: 'Done' })"
          >
            Done
          </button>
          <button
            class="
              text-xs
              m-auto
              text-yellow-500
              hover:border-b-yellow-500
              border-2 border-transparent
            "
            @click="$emit('upstatus', { id: id, d: 'Pending' })"
          >
            Pending
          </button>
        </div>
          <div class="text-[10px] ml-3 text-gray-300">
            Created At : {{ createdAt }}
          </div>
      </div>
      <div :class="statusRender.bg" class="w-3 rounded-xl"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "header", "status", "createdAt", "createdBy", "task"],
  data() {
   return {detailToggle: false};
  },
  computed: {
    statusRender() {
      if (this.status === "Pending") {
        return { bg: "bg-yellow-500", text: "text-yellow-500" };
      } else if (this.status === "Done") {
        return { bg: "bg-emerald-500", text: "text-emerald-500" };
      } else if (this.status === "Deleted") {
        return { bg: "bg-rose-500", text: "text-rose-500" };
      } else {
        return { bg: "bg-blue-500", text: "text-blue-500" };
      }
    },

  },
  methods: {
        showDetail() {
          console.log("show details",this.detailToggle)
      if (this.detailToggle == false) {
        this.detailToggle = true;
      } else {
        this.detailToggle = false;
      }
    },
  },
};
</script> 