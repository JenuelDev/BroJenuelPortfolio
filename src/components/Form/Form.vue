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
            <div class="mt-10px">
                <button
                    type="button"
                    class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 w-[100%]"
                    :class="{ 'opacity-50 hover:opacity-50 cursor-not-allowed': sending }"
                    @click="sendEmail()"
                    :disabled="sending"
                >
                    <p style="margin: 0">{{ sending ? 'Sending...' : 'Send' }}</p>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from './../alert/Alert.vue';
import { reactive, ref } from '@vue/reactivity';
import emailjs, { init } from 'emailjs-com';
init('user_zdO7SqNAzUeW1bl8KtMhn');

export default {
    name: 'Form',
    components: { Alert },
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
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };
        const checkProperties = () => {
            return form.subject == '' || form.name == '' || form.email == '' || form.message == '' ? true : false;
        };

        const alertSet = ({ title, description, type, show }) => {
            alertTitle.value = title;
            alertDescription.value = description;
            alertType.value = type;
            alertShow.value = show;
        };

        const validateForm = async (sentSuccess = false) => {
            if (sentSuccess === true) {
                alertSet({
                    title: `Successfully Sent! I'll Check them later. 😁👍`,
                    description: `It seams that your message was send successfuly. I'm not online always but I will definitely check your message when I go online.`,
                    type: 'success',
                    show: true,
                });
                form.subject = '';
                form.name = '';
                form.email = '';
                form.message = '';
                return;
            }

            if (checkProperties() === true) {
                alertSet({
                    title: 'Some Fields Are Empty 😢😭📧',
                    description: 'Sorry about that, it seems that there are empty fields. Please fill them all out.',
                    type: 'error',
                    show: true,
                });

                return false;
            }
            if (validateEmail(form.email) === false) {
                alertSet({
                    title: 'Oops! Invalid Email 😢😭📧',
                    description: 'Sorry about that, it seems that you have entered a wrong email format.',
                    type: 'error',
                    show: true,
                });
                return false;
            }

            return true;
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
                    emailjs
                        .send('service_88wvqn9', 'template_nulphu2', this.form)
                        .then(() => {
                            sent.value = true;
                            showError.value = false;
                            sending.value = false;
                            validateForm(true);
                        })
                        .catch((e) => {
                            sent.value = false;
                            showError.value = false;
                            sending.value = false;

                            if (e.response.status == 500) {
                                alertSet({
                                    title: 'Oops! Email Does not Exist! 😢😭📧',
                                    description: 'Sorry about that, it seems that you have entered a wrong email, I cant find it anywhere.',
                                    type: 'error',
                                    show: true,
                                });
                            }
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
