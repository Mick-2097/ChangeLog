<script setup>
import { userAuth } from '../stores/userAuth.js'
const isLoggedIn = userAuth()
</script>

<template>
    <div class="main w-25 m-auto" style="min-width: 320px;">

      <form class="text-center p-5 rounded shadow-lg">
        <!-- <img class="mb-4" src="../assets/bootstrap-logo.svg" alt="" width="72" height="57"> -->
        <h1 class="h3 mb-3 fw-normal">Please log in</h1>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <!-- use pinia :-) -->
        <button @click.prevent="isLoggedIn.toggle()" class="w-100 btn btn-lg btn-primary mb-3" type="submit">Log in</button>
        <button class="mb-3 btn btn-link">Create a new account</button>
      </form>
      
    </div>
</template>