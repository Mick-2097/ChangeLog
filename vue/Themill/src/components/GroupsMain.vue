<template>
<div class="container">
    
    <!-- Page title -->
    <h1 class="text-center mt-5">Groups</h1>
    
    <!-- Table -->
    <div class="table-responsive-xxl">
        <table class="table w-75 shadow-lg mx-auto mt-5" style="min-width: 575px;">
            <thead>
                <tr>
                    <th class=" ps-3">Id</th>
                    <th>Name</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class=" ps-3"></td>
                    <td><input class="form-control" type="text" placeholder="Name"/></td>
                    <td class="text-center"><button class="btn btn-outline-primary" style="min-width: 80px;">Create</button></td>
                </tr>
                <tr>
                    <th class=" ps-3">1</th>
                    <td>Group 1 has a really long name for testing text wrap at smaller screen sizes</td>
                    <td class="text-center"><button class="btn btn-outline-primary" style="min-width: 80px;">Edit</button></td>
                </tr>
                <tr>
                    <th class=" ps-3">2</th>
                    <td>Group 2</td>
                    <td class="text-center"><button class="btn btn-outline-primary" style="min-width: 80px;">Edit</button></td>
                </tr>
                <tr>
                    <th class=" ps-3">3</th>
                    <td>Group 3</td>
                    <td class="text-center"><button class="btn btn-outline-primary" style="min-width: 80px;">Edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>