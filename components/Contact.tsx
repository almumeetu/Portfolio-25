import React, { useState } from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4 tracking-tight">{children}</h2>
);


const Contact: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus(null);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        // IMPORTANT: Replace 'YOUR_UNIQUE_ID' with your actual Formspree form ID.
        // You can create a new form at https://formspree.io/
        const formspreeEndpoint = 'https://formspree.io/f/mqkrvvzb'; 
        // This is a demo endpoint. Replace it with your own.
        // I have used my own for now so you can test it: almumeetu@gmail.com

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' });
                form.reset();
            } else {
                setStatus({ type: 'error', message: 'Oops! There was a problem submitting your form. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto text-center">
            <SectionTitle>Get In Touch</SectionTitle>
            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out using the form below or at <a href="mailto:almumeetu@gmail.com" className="text-purple-400 hover:underline">almumeetu@gmail.com</a>.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/50 border border-slate-700 p-6 md:p-8 rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 text-left">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" required className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" />
                    </div>
                    <div className="flex-1 text-left">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="_replyto" required className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" />
                    </div>
                </div>
                <div className="text-left">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"></textarea>
                </div>
                <div>
                     <button type="submit" disabled={submitting} className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                        {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
                {status && (
                    <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.message}
                    </p>
                )}
            </form>

        </div>
    );
};

export default Contact;