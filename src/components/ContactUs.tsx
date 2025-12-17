
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xjknndqd");
    const formRef = useRef<HTMLFormElement>(null);
    
    useEffect(() => {
        if (state.succeeded) {
            // Reset form after 3 seconds
            const timer = setTimeout(() => {
                if (formRef.current) {
                    formRef.current.reset();
                }
                // Reset Formspree state by reloading
                window.location.hash = '#contact';
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);
    
    if (state.succeeded) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">Thank you!</h3>
                    <p className="text-gray-700 mb-4">Your message has been sent successfully. We'll get back to you soon.</p>
                    <p className="text-sm text-gray-500">Form will reset in a moment...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Send Us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
                {/* name */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                
                <button 
                    className="w-full bg-lime-500 hover:bg-lime-600 text-purple-900 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline shine-effect transition-colors" 
                    type="submit"
                    disabled={state.submitting}
                >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;