import { Form, useActionData } from '@remix-run/react';

export default function ContactForm(actionData:any) {
    // const actionData = useActionData();

    return (
        <div className="container mx-auto pt-6 pb-6 md:pb-12 lg:pb-16 mt-16" id="contact">
            <h2 className="section-title">Contact</h2>
            <Form method="post" action="?index" className="mt-6 sm:mt-10 lg:mt-16">
                <div className="flex flex-col items-center gap-4">
                    <input
                        className={`contact-input h-8 ${actionData?.errors?.email && 'border-red-500'}`}
                        placeholder="Email*"
                        name="email"
                    />
                    {actionData?.errors?.email && (
                        <p className="text-red-500 text-xs mt-1">{actionData.errors.email}</p>
                    )}

                    <textarea
                        className={`contact-input h-48 ${actionData?.errors?.message && 'border-red-500'}`}
                        placeholder="Message*"
                        name="message"
                    />
                    {actionData?.errors?.message && (
                        <p className="text-red-500 text-xs mt-1">{actionData.errors.message}</p>
                    )}
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="py-1 px-6 sm:px-8 shadow-sm shadow-[#222831] dark:shadow-[#FEFAF6] mt-4 sm:mt-6 rounded-md text-sm text-[#222831] dark:text-[#FEFAF6] font-medium border-2 border-[#222831] dark:border-[#FEFAF6] focus:outline-none focus:ring-2 focus:ring-[#222831] dark:focus:ring-[#f1d2b5] hover:outline-none hover:ring-2 hover:ring-[#f8f2ec] dark:hover:ring-[#f1d2b5] hover:font-semibold focus:font-semibold"
                    >
                        Send
                    </button>
                </div>
            </Form>

            {/* Success Message */}
            {actionData?.success && (
                <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
            )}
        </div>
    );
}