<script setup>
    import { reactive } from "vue"
    
    const state = reactive({ 
        selected: [],   // Group selected
        groups: [],     // List of groups
    })

    fetch('groups.json')
    .then(res => res.json())
    .then(data => { 
        state.groups = data
        if (state.groups.length) {
            let currentID = state.groups[0].id
            groupSelect(currentID)
        }
    })

    const groupSelect = (groupID) => {
        fetch('group' + groupID + '.json')
            .then(res => res.json())
            .then(data => {
                state.selected = data
        })
    }

    const logSelect = (object) => {
        console.log(object.id)
    }

</script>

<template>
<div class="d-sm-flex mt-3 mb-auto w-75 mx-auto" style="min-width: 320px;">
    
    <!-- buttons -->
    <ul class="nav flex-column text-center mx-auto group-buttons">
        <li v-for="group in state.groups" :key="group.id" class="nav-item">
            <a @click="groupSelect(group.id)" class="nav-link" href="#">{{ group.name }}</a>
        </li>
    </ul>

    <!-- cards -->
    <div class="flex-column w-sm-100 w-75 m-auto">
        
        <div v-for="object in state.selected" :key="object.id" class="card list-group-item border-light shadow mb-3">
            <div class="card-body">
                <a @click="logSelect(object)" class="card-title">
                <RouterLink to="/LogView/object.id">{{ object.title }}</RouterLink>
                </a>
                <p class="card-subtitle my-3">{{ object.date }}</p>
                <p class="card-text">{{ object.description.substring(0, 60) }} .....</p>
            </div>
        </div>

    </div>
</div>
</template>