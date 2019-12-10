import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters:{
        counter(state){
            return state.counter;
        },

        doubeldCounter(state){
            return state.counter*2;
        },

        multiCounter :(state)=> (multi) =>{
            return state.counter* multi;
        }
    },
    mutations:{
        increase(state){
            state.counter ++;
        },
        decrease(state){
            state.counter --
        },
        n_increase(state,payload){
            state.counter += payload.amount
        },
    },

    actions:{
        // increase1Secound({commit}){
        //     setTimeout(()=>{ //Arrow Functions هذه طريقة ال  
        //         commit('increase');
        //     },1000);
        // }

        increase1Secound(context){
            setTimeout (function(){ //function هذه طريقة ال  
                context.commit('increase');
            },1000);
        }
    }
});

export default store;