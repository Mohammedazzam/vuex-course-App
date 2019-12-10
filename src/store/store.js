import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters:{
        doubeldCounter(state){
            return state.counter*2;
        },
        multiCounter :(state)=> (multi) =>{
            return state.counter* multi;
        }
    }
});

export default store;