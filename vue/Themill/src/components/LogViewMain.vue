<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const state = reactive({
    currentLog: null,
})
const getData = (groupID, logID) => {
    fetch(`http://localhost:5173/group${groupID}.json`)
    .then(res => res.json())
    .then(data => state.currentLog = data[logID - 1])
}
getData(route.params.group, route.params.log)
</script>

<template>

<div v-if="state.currentLog !== null" class="container w-75 mb-auto" style="max-width: 800px;">
    
    <!-- Page title -->
    <h1 class="text-center mt-5">Log view</h1>

    <!-- Log card -->
    <div class="card list-group-item border-light shadow-lg mb-5">
        <div class="card-body mt-3">
            <header class="card-title text-center fs-4">{{state.currentLog.title}}</header>
            <p class="card-subtitle mb-5">{{state.currentLog.date}}</p>
            <p class="card-text">
                {{state.currentLog.description}}
            </p>
        </div>
    </div>
</div>

</template>