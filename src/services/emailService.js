import emailjs from "@emailjs/browser";

export const sendMail = async (form) => {
      

    return emailjs.send(

        import.meta.env.VITE_EMAIL_SERVICE_ID,

        import.meta.env.VITE_EMAIL_TEMPLATE_ID,

        {

            from_name: form.name,

            reply_to: form.email,

            message: form.message,

        },

        import.meta.env.VITE_EMAIL_PUBLIC_KEY

    );

};