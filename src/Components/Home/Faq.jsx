

const Faq = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-600">Feel free to use this header on your website to introduce your FAQ section.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What types of crafts do we offer?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">At Craftopia, we offer a diverse range of crafts including painting, sketching, pottery, DIY kits, and much more. Explore our collection to find the perfect craft for your creative projects. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do you offer customizable or personalized items</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, many of our items can be customized or personalized to suit your preferences. Contact us for more information on custom orders and personalization options.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I place an order?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Placing an order with Craftopia is easy! Simply browse our online shop, add your desired items to the cart, and proceed to checkout. Follow the prompts to enter your shipping and payment details to complete your purchase. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What payment methods do you accept?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            We accept various payment methods including credit/debit cards, PayPal, and other secure online payment options. Rest assured that your payment information is safe and protected. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is your shipping policy?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            We offer fast and reliable shipping options for our customers. Shipping rates and delivery times may vary depending on your location and the items in your order. For more details, please refer to our shipping policy page.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;