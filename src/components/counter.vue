<template>
    <div>
        <h2>Counter</h2>
        Counter: {{counter}} <br>
        doubeldCounter: {{doubeldCounter}} <br>

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
