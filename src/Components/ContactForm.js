import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mvolyyyl");
    
    if (state.succeeded) {
        return (
            <div className='answer'>
                <p className='title'>Thanks for messaging! We will contact you soon!</p>
            </div>
        )
}
    return (
        <form className='form_container' onSubmit={handleSubmit}>
            <h3>SEND US a MESSAGE</h3>
            <label htmlFor="email">Your Email</label>
        <input className='input_mail'
            id="email"
            type="email" 
            name="email"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <label htmlFor="text">Message </label>
        <textarea className='input_text'
            id="message"
            name="message"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button className='btn_form' type="submit" disabled={state.submitting}>
            SEND MESSAGE
        </button>
    </form>
    );
}

export default ContactForm;