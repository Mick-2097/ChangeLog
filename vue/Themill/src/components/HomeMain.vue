<script setup>
    import { ref } from "vue"
    
    let selected = []
    const componentKey = ref(0)
    const updateComponent = () => componentKey.value +=1

    let group1Data = []
    fetch('group1.json')
        .then(res => res.json())
        .then(data => {
            group1Data.value = data
            selected.value = group1Data.value
            console.log('selected.value = ', selected.value)
        }) 
    let group2Data = []
    fetch('group2.json')
        .then(res => res.json())
        .then(data => {
            group2Data.value = data
        }) 
    let group3Data = []
    fetch('group3.json')
        .then(res => res.json())
        .then(data => {
            group3Data.value = data
        }) 
    let group4Data = []
    fetch('group4.json')
        .then(res => res.json())
        .then(data => {
            group4Data.value = data
        })
    
    let g1Select = () => {
        selected.value = group1Data.value
        updateComponent()
    }
    let g2Select = () => {
        selected.value = group2Data.value
        updateComponent()
    }
    let g3Select = () => {
        selected.value = group3Data.value
        updateComponent()
    }
    let g4Select = () => {
        selected.value = group4Data.value
        updateComponent()
    }
    
</script>

<template>
<div class="d-sm-flex mt-3 mb-auto w-75 mx-auto" style="min-width: 320px;">
    
    <!-- buttons -->
    <ul class="nav flex-column text-center mx-auto group-buttons">
        <li class="nav-item">
            <a @click="g1Select()" class="nav-link" href="#">Group 1</a>
        </li>
        <li class="nav-item">
            <a @click="g2Select()" class="nav-link" href="#">Group 2</a>
        </li>
        <li class="nav-item">
            <a @click="g3Select()" class="nav-link" href="#">Group 3</a>
        </li>
        <li class="nav-item">
            <a @click="g4Select()" class="nav-link" href="#">Group 4</a>
        </li>
    </ul>

    <!-- cards -->
    <div class="flex-column w-sm-100 w-75 m-auto">
        
            <div v-for="object in selected.value" :key="object.id" class="card list-group-item border-light shadow mb-3">
                <div class="card-body" :key="componentKey">
                    <a class="card-title"><RouterLink to="/LogView">{{ object.title }}</RouterLink></a>
                    <p class="card-subtitle my-3">{{ object.date }}</p>
                    <p class="card-text">{{ object.description.substring(0, 60) }} ......</p>
                </div>
            </div>

    </div>
</div>
</template>