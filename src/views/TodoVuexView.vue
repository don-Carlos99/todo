<script setup>
import Tasks from "@/components/Tasks.vue";
</script>

<template>
  <div class="">
    <h1 class="text-4xl font-simibold mb-10">ToDo Vuex</h1>

    <div class="flex m-5 space-x-4">
      <input
        v-model="header"
        type="text"
        placeholder=" Title"
        class="outline-transparent text-gray-500 leading-10"
      />
      <input
        v-model="texts"
        type="text"
        placeholder=" Write Your Todo !"
        class="outline-transparent text-gray-500 leading-10"
      />
      <input
        v-model="user"
        type="text"
        placeholder=" Your Name"
        class="outline-transparent text-gray-500 leading-10"
      />
      <button
        @click="createTask(header, texts, user)"
        class="m-auto text-emerald-300"
      >
        Add Task
      </button>
    </div>
    <hr class="mb-10" />
    <Tasks
      v-for="i in dataList"
      :key="i.id"
      :id="i.id"
      :header="i.header"
      :status="i.status"
      :createdAt="i.createdAt"
      :createdBy="i.createdBy"
      :task="i.task"
      @del="deleteTask"
      @upstatus="statusUpdate"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    console.log(`the component is now mounted.`);
    console.log(this.$store.state.todo);
    console.log(this.$store.getters.getTodo);
    this.dataList=this.$store.getters.getTodo
  },
  computed:{
    read(){
      
    }
  },
  methods: {
    createTask(title, val, user) {
      var o = {
        id: Date.now(),
        header: title
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        task: val,
        status: "Pending",
        createdAt: new Date(),
        createdBy: user
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      };
      this.$store.commit('addTodo', o)
      this.texts = null;
      this.header = null;
      this.user = null;
    },
    readTask() {},
    updateTask() {},
    deleteTask(val) {
      this.$store.commit('delete', val)
    },
    statusUpdate(val) {
      this.$store.commit('statusUp', val)
    },
  },
};
</script>

