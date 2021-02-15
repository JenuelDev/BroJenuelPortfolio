<template>
    <div class="contact-form">
        <div class="form">
            <div v-show="showError" class="alert show-error">
                <h1>Opsy! Message not Sent 😅</h1>
                <p>I think some fields are empty, please fill them all out.</p>
            </div>
            <div v-show="sent && !showError" class="alert show-success">
                <h1>Message Sent! 😊</h1>
                <p>Your message was sent successfuly! I'll check them later.</p>
            </div>
            <div class="flex">
                <input v-model="form.name" type="text" placeholder="Name">
                <input v-model="form.email" type="email" placeholder="Email">
            </div>
            <input v-model="form.subject" type="text" placeholder="Subject">
            <textarea v-model="form.message" name="msg" placeholder="Message" rows="8"></textarea>
            <GradientBorder
                @click="sendEmail()"
                aria-label="Send Message"
                style="margin-top: 5px; width: 150px; font-size: 1.1rem !important; font-weight: 900;"
            >
                <p style="margin: 0;">{{sending ? "Sending..." : "Send"}}</p>
            </GradientBorder>
        </div>
    </div>
    
</template>
<script>
import emailjs, { init } from 'emailjs-com';
init('user_zdO7SqNAzUeW1bl8KtMhn')
import GradientBorder from './../GradientBorder'
export default {
    name: "Form",
    components: {GradientBorder},
    data: () => {
        return {
            form: {
                subject: "",
                name: "",
                email: "",
                message: ""
            },
            showError: false,
            sent: false,
            sending: false
        }
    },
    methods: {
        sendEmail() {
            this.sending = true
            if (this.checkProperties()) {
                emailjs.send('service_88wvqn9', 'template_nulphu2', this.form)
                .then(() => {
                    this.sent = true
                    this.showError = false
                    this.sending = false
                    this.form = {
                        subject: "",
                        name: "",
                        email: "",
                        message: ""
                    }
                })
                .catch(() => {
                    this.sent = false
                    this.showError = false
                    this.sending = false
                });
            } else {
                this.showError = true
                this.sending = false
            }
        },
        checkProperties() {
            let form = this.form
            return form.subject != '' && form.name != '' && form.email != '' && form.message != '' ? true : false
        }
    }
}
</script>
<style lang="scss" src="./Style.scss"></style>