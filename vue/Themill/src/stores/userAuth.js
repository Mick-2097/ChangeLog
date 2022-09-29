import { defineStore } from "pinia";

export const userAuth = defineStore('isAuthorised', {
    state: () => {
        return { isLoggedIn: false }
    },
    actions: {
        toggle() {
            this.isLoggedIn = !this.isLoggedIn
            console.log(this.isLoggedIn)
        }
    }
})