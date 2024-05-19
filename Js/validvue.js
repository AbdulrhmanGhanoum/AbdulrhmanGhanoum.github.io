const { createApp } = Vue;

createApp({
    data() {
        return {
            name: '',
            email: '',
            errors: []
        };
    },
    methods: {
        checkForm(e) {
            this.errors = [];

            if (!this.name) {
                this.errors.push('enter name v.');
            }
            if (!this.email) {
                this.errors.push('enter email.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Enter a correct email.');
            }
            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}).mount('#app');