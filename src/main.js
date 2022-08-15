import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      todo: [{
        createdAt: "Mon Aug 01 2022 15:48:21 GMT+0500 (Pakistan Standard Time)",
        createdBy: "Ahmed Rana",
        header: "Web App",
        id: 1659350901623,
        status: "Pending",
        task: "FrontEnd Development Task Id #12312"
      },
      {
        createdAt: " Mon Aug 01 2022 15:49:02 GMT+0500 (Pakistan Standard Time)",
        createdBy: "Uzair Ashraf",
        header: "Node Server",
        id: 1659350901623,
        status: "Pending",
        task: "rest apis on express server"
      },
      ]
    }
  },
  getters: {
    getTodo(state) {
      return state.todo
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addTodo(state, payload) {
      state.todo.push(payload)
    },
    delete(state,payload){
      var o = state.todo.find((x) => x.id === payload);
      var i = state.todo.indexOf(o);
      state.todo.splice(i, 1);
    },
    statusUp(state,payload){
      var o = state.todo.find((x) => x.id === payload.id);
      var i = state.todo.indexOf(o);
      state.todo[i].status = payload.d;
    }
  }
})
const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(store)
