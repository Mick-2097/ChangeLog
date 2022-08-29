<template>
<div class="container">
    
    <!-- Page title -->
    <h1 class="text-center mt-5">Admin</h1>


    <div class="container w-75 p-0">
        <a href="#" class="btn btn-outline-primary mt-3 shadow" style="min-width: 95px;">Create new</a>
    </div>

    <div class="table-responsive">
        <table class="table mt-5 shadow-lg w-75 mx-auto" style="min-width: 565px;">
            <thead>
                <tr>
                    <th class="ps-3">Id</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Groups</th>
                    <th class="text-end pe-4">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="ps-3">1</th>
                    <td>Today</td>
                    <td>Log 1</td>
                    <td>
                        <div class="btn-group dropend">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="Groups Dropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            Groups
                            </button>
                            <ul class="dropdown-menu shadow-lg">
                                <li><p class="dropdown-item">Group 1</p></li>
                                <li><p class="dropdown-item">Group 2</p></li>
                                <li><p class="dropdown-item">Group 3</p></li>
                            </ul>
                        </div>
                    </td>
                    <td class="text-end"><button class="btn btn-outline-primary">Edit</button></td>
                </tr>
                <tr>
                    <th class="ps-3">2</th>
                    <td>Today</td>
                    <td>Log 2</td>
                    <td>
                        <div class="btn-group dropend">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="Groups Dropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            Groups
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="defaultDropdown">
                                <li><p class="dropdown-item">Group 1</p></li>
                                <li><p class="dropdown-item">Group 2</p></li>
                                <li><p class="dropdown-item">Group 3</p></li>
                            </ul>
                        </div>
                    </td>
                    <td class="text-end"><button class="btn btn-outline-primary">Edit</button></td>
                </tr>
                <tr>
                    <th class="ps-3">3</th>
                    <td>Today</td>
                    <td>Log 3</td>
                    <td>
                        <div class="btn-group dropend">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="Groups Dropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            Groups
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="defaultDropdown">
                                <li><p class="dropdown-item">Group 1</p></li>
                                <li><p class="dropdown-item">Group 2</p></li>
                                <li><p class="dropdown-item">Group 3</p></li>
                            </ul>
                        </div>
                    </td>
                    <td class="text-end"><button class="btn btn-outline-primary">Edit</button></td>
                </tr>
                <tr>
                    <th class="ps-3">4</th>
                    <td>Today</td>
                    <td>Log 4</td>
                    <td>
                        <div class="btn-group dropend">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="Groups Dropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            Groups
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="defaultDropdown">
                                <li><p class="dropdown-item">Group 1</p></li>
                                <li><p class="dropdown-item">Group 2</p></li>
                                <li><p class="dropdown-item">Group 3</p></li>
                            </ul>
                        </div>
                    </td>
                    <td class="text-end"><button class="btn btn-outline-primary">Edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>