<script setup>
import { reactive } from "vue"

const state = reactive({ 
    logs: [],
    groups: [],
    currentGroupID: null,
})
//      On load put group data into reactive state management and show 1st object
fetch('groups.json')
.then(res => res.json())
.then(data => { 
    state.groups = data
    if (state.groups.length) {
        let currentGroup = state.groups[0].id
        groupSelect(currentGroup)
    }
})
//      On click put selected group into reactive state management
const groupSelect = (groupID) => {
    state.currentGroupID = groupID
    fetch(`group${groupID}.json`)
    .then(res => res.json())
    .then(data => state.logs = data)
}
</script>

<template>
<div class="d-sm-flex mt-3 mb-auto w-75 mx-auto" style="min-width: 320px;">
    
    <!-- buttons -->

    <!-- <ul class="flex-column mx-auto mb-5 nav">
        <li v-for="group in state.groups" :key="group.id" class="nav-item">
            <a @click="groupSelect(group.id)" class="btn nav-link" href="#">{{ group.name }}</a>
        </li>   
    </ul> -->

    <div class="flex-column mx-auto mb-5">
        <div v-for="group in state.groups" :key="group.id">
            <button @click="groupSelect(group.id)" 
            class="btn btn-outline-primary border-light w-100 mt-2">
            {{ group.name }}
            </button>
        </div>
    </div>

    <!-- cards -->
    <div class="flex-column w-sm-100 w-75 m-auto">
        
        <div v-for="log in state.logs" :key="log.id" class="card list-group-item border-light shadow mb-3">
            <div class="card-body">
                    <RouterLink class="card-title" 
                    :to="{
                        name: 'logview', 
                        params: {group: state.currentGroupID, log: log.id}}">
                        {{ log.title }}</RouterLink>        
                <p class="card-subtitle my-3">{{ log.date }}</p>
                <p class="card-text">{{ log.description.substring(0, 60) }}......</p>
            </div>
        </div>

    </div>
    
</div>
</template>