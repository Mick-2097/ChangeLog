<template>
<div class="container">
    
    <!-- Page title -->
    <h1 class="text-center mt-5">Editor</h1>


    <!-- Form -->
    <form class="p-4 w-75 mx-auto mb-5 shadow-lg">
        <!-- Name -->
        <label class="form-label" for="name">Name</label>
        <input class="form-control mb-3" type="text" id="name">
        <!-- Date -->
        <label class="form-label" for="date">Date </label>
        <input class="form-control mb-3" type="date" id="date">
        <!-- Groups -->
        <div class="btn-group dropend">
            <button class="btn btn-primary dropdown-toggle mb-3" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
            Group select
            </button>
            <label for="groups"></label>
            <ul class="dropdown-menu shadow-lg" id="groups" aria-labelledby="defaultDropdown">
                <li class="p-4">
                    <div class="form-check">
                        <label class="form-check-label" for="group1">Group 1</label>
                        <input class="form-check-input" type="checkbox" value="" id="group1">
                    </div>
                </li>
                <li class="p-4">
                    <div class="form-check">
                        <label class="form-check-label" for="group2">Group 2</label>
                        <input class="form-check-input" type="checkbox" value="" id="group2">
                    </div>
                </li>
                <li class="p-4">
                    <div class="form-check">
                        <label class="form-check-label" for="group3">Group 3</label>
                        <input class="form-check-input" type="checkbox" value="" id="group3">
                    </div>
                </li>
                <li class="p-4">
                    <div class="form-check">
                        <label class="form-check-label" for="group4">Group 4</label>
                        <input class="form-check-input" type="checkbox" value="" id="group4">
                    </div>
                </li>
            </ul>
        </div>
        <br>
        <!-- Content -->
        <label class="form-label" for="text">Text</label>
        <textarea class="form-control mb-3" type="textarea" id="text" rows="6"></textarea>
        <!-- Save button -->
        <button class="btn btn-success" type="submit">Save</button>
    </form>
</div>
</template>