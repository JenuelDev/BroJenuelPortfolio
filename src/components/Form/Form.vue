<template>
    <div class="contact-form">
        <div class="form">
            <Alert :show="alertShow" :description="alertDescription" :type="alertType" :title="alertTitle" />
            <div class="flex">
                <input v-model="form.name" type="text" placeholder="Name" />
                <input v-model="form.email" type="email" placeholder="Email" />
            </div>
            <input v-model="form.subject" type="text" placeholder="Subject" />
            <textarea v-model="form.message" name="msg" placeholder="Message" rows="8"></textarea>
            <GradientBorder @click="sendEmail()" aria-label="Send Message" :withBg="false" style="margin-top: 5px; width: 150px; font-size: 1.1rem !important; font-weight: 900">
                <p style="margin: 0">{{ sending ? 'Sending...' : 'Send' }}</p>
            </GradientBorder>
        </div>
    </div>
</template>
<script>
import GradientBorder from './../GradientBorder';
import Alert from './../alert/Alert.vue';
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';

export default {
    name: 'Form',
    components: { GradientBorder, Alert },
    setup() {
        const form = reactive({
            subject: '',
            name: '',
            email: '',
            message: '',
        });

        const alertShow = ref(false);
        const alertTitle = ref('');
        const alertDescription = ref('');
        const alertType = ref('success');
        const showError = ref(false);
        const sent = ref(false);
        const sending = ref(false);

        const validateEmail = (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };
        const checkProperties = () => {
            return form.subject != '' && form.name != '' && form.email != '' && form.message != '' ? true : false;
        };

        const validateForm = async (sentSuccess = false) => {
            if (sentSuccess === true) {
                alertTitle.value = `Your Message Send! I'll Check them later. 😁👍`;
                alertDescription.value = `It seams that your message was send successfuly. I'm not online always but I will definitely check your message when I go online.`;
                alertType.value = 'success';
                alertShow.value = true;
                return false;
            }

            if (checkProperties() === false) {
                console.log('hey');
                alertTitle.value = 'Some Fields Are Empty 😢😭📧';
                alertDescription.value = 'Sorry about that, it seems that there are empty fields. Please fill them all out.';
                alertType.value = 'error';
                alertShow.value = true;
                return false;
            }
            if (validateEmail(form.email) === false) {
                alertTitle.value = 'Oops! Invalid Email 😢😭📧';
                alertDescription.value = 'Sorry about that, it seems that you have entered a wrong email format.';
                alertType.value = 'error';
                alertShow.value = true;
                return false;
            }

            return true;
        };

        const alertSet = ({title, description, type, show}) => {
            alertTitle.value = title;
            alertDescription.value = description;
            alertType.value = type;
            alertShow.value = show;
        };

        return {
            form,
            showError,
            sent,
            sending,
            alertShow,
            alertTitle,
            alertDescription,
            alertType,
            validateEmail,

            async sendEmail() {
                alertShow.value = false;
                sending.value = true;
                if (await validateForm()) {
                    axios
                        .post(`${process.env.VUE_APP_BACKEND_URL}/email/send`, form)
                        .then((res) => {
                            console.log(res);
                            sent.value = true;
                            showError.value = false;
                            sending.value = false;
                            form.value = {
                                subject: '',
                                name: '',
                                email: '',
                                message: '',
                            };
                            validateForm(true);
                        })
                        .catch((e) => {
                            if (e.response.data.deliverable === false) {
                                alertSet({
                                    title: "Ops! Email Doesn't Exist 😥",
                                    description: "It seems that you have entered the email incorrectly that I can't find it. " 
                                    + (e.response.data.did_you_mean != '' ? `Did you mean <b>${e.response.data.did_you_mean}</b>.`: ''),
                                    type: "error",
                                    show: true
                                })
                            }
                            sent.value = false;
                            showError.value = false;
                            sending.value = false;
                        });
                } else {
                    sending.value = false;
                }
            },
        };
    },
};
</script>
<style lang="scss" src="./Style.scss"></style>