<script setup>
    
    import { ref, onBeforeMount, reactive } from "vue"

    const state = reactive({ 
        selected: [],
        groups: []
    })

    fetch('groups.json')
    .then(res => res.json())
    .then(data => state.groups = data)

    let clicked = (event) => {
        fetch(event.target.innerText + '.json')
            .then(res => res.json())
            .then(data => {
                state.selected = data
            })
    }
    
</script>

<template>
<div class="d-sm-flex mt-3 mb-auto w-75 mx-auto" style="min-width: 320px;">
    
    <!-- buttons -->
    <ul class="nav flex-column text-center mx-auto group-buttons">
        <li v-for="group in state.groups" :key="group.id" class="nav-item">
            <a @click="clicked" class="nav-link" href="#">{{ group.name }}</a>
        </li>
        
    </ul>

    <!-- cards -->
    <div class="flex-column w-sm-100 w-75 m-auto">
        
        <div v-for="object in state.selected" :key="object.id" class="card list-group-item border-light shadow mb-3">
            <div class="card-body">
                <a class="card-title fs-6"><RouterLink to="/LogView">{{ object.title }}</RouterLink></a>
                <p class="card-subtitle my-3">{{ object.date }}</p>
                <p class="card-text">{{ object.description.substring(0, 60) }} .....</p>
            </div>
        </div>

    </div>
</div>
</template>