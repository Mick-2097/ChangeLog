<script setup>

    let group1Data = []
    fetch('group1.json')
        .then(res => res.json())
        .then(data => {
            group1Data.value = data
            console.log(group1Data.value)
        }) 
    let group2Data = []
    fetch('group2.json')
        .then(res => res.json())
        .then(data => {
            group2Data.value = data
            console.log(group2Data.value)
        }) 
    let group3Data = []
    fetch('group3.json')
        .then(res => res.json())
        .then(data => {
            group3Data.value = data
            console.log(group3Data.value)
        }) 
    let group4Data = []
    fetch('group4.json')
        .then(res => res.json())
        .then(data => {
            group4Data.value = data
            console.log(group4Data.value)
        })
    
</script>

<template>
<div class="d-sm-flex mt-3 mb-auto w-75 mx-auto" style="min-width: 320px;">
    
    <!-- buttons -->
    <ul class="nav flex-column text-center mx-auto group-buttons">
        <li class="nav-item">
            <a @click="" class="nav-link" href="#">Group 1</a>
        </li>
        <li class="nav-item">
            <a @click="" class="nav-link" href="#">Group 2</a>
        </li>
        <li class="nav-item">
            <a @click="" class="nav-link" href="#">Group 3</a>
        </li>
        <li class="nav-item">
            <a @click="" class="nav-link" href="#">Group 4</a>
        </li>
    </ul>

    <!-- cards -->
    <div class="flex-column w-sm-100 w-75 m-auto">
        <div class="card list-group-item border-light shadow mb-3">
            <div class="card-body">
                <a class="card-title"><RouterLink to="/LogView">Log 1 (link to this log)</RouterLink></a>
                <p class="card-subtitle my-3">Date/time of this log</p>
                <p class="card-text">Brief description of this log....</p>
            </div>
        </div>
        <div class="card list-group-item border-light shadow mb-3">
            <div class="card-body">
                <a class="card-title" href="#">Log 2</a>
                <p class="card-subtitle my-3">Date/time of this log</p>
                <p class="card-text">Brief description of this log....</p>
            </div>
        </div>
        <div class="card list-group-item border-light shadow mb-3">
            <div class="card-body">
                <a class="card-title" href="#">Log 3</a>
                <p class="card-subtitle my-3">Date/time of this log</p>
                <p class="card-text">Brief description of this log....</p>
            </div>
        </div>
    </div>
</div>
</template>