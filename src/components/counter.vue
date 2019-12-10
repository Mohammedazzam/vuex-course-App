<template>
    <div>
        <h2>Counter</h2>
        Counter: {{counter}} <br>
        doubeldCounter: {{doubeldCounter}} <br>
        Counter * 3 : {{multiCounter}} <br>

        <button @click="increase">Increase</button>
        <button @click="decrease">Decrease</button>
    </div>
</template>

<script>
export default {
    computed:{
        counter(){
            return this.$store.state.counter;
        },
        doubeldCounter(){
            return this.$store.getters.doubeldCounter;
        },
         multiCounter(){
            return this.$store.getters.multiCounter(3);
        }
    },
    methods: {
        increase (){
            this.$store.state.counter ++;
        },
        decrease (){
            this.$store.state.counter --;
        }
    }
}
</script>
