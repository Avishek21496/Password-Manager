

const Review = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://i.ibb.co/wK6MGsh/r2.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Pat Cummnis</h4>
                            <span className="text-xs dark:text-gray-600">2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.3</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>Craftopia is truly a haven for artists and craft enthusiasts alike. The sheer diversity of products available is simply astounding, catering to a wide range of interests and skill levels. From high-quality painting supplies to intricate DIY kits, every item exudes craftsmanship and creativity. What sets Craftopia apart is their unwavering commitment to supporting artisans and promoting handmade goods. Each product tells a story, making every purchase feel like a meaningful connection to the maker.</p>
                    <p>My shopping experience with Craftopia was seamless – the website is intuitively designed, making it easy to navigate and find exactly what I need. Shipping was prompt, and the customer service team was incredibly responsive and helpful. Craftopia has become my go-to destination for all my artistic endeavors, and I wholeheartedly recommend it to anyone looking to unleash their creativity</p>
                </div>
            </div>
            {/* --------------------------- */}
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://i.ibb.co/bdGyyX8/r1.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Leroy Jenkins</h4>
                            <span className="text-xs dark:text-gray-600">1 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.7</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>Craftopia has been a game-changer for me as a budding crafter. As someone relatively new to the world of crafting, I was delighted to discover Craftopias extensive range of products and resources tailored for beginners like myself. The website is a treasure trove of inspiration, offering a plethora of creative ideas and tutorials to fuel my imagination</p>
                    <p>I've found everything I need to kickstart my artistic journey, from essential supplies to specialized tools. What sets Craftopia apart is their unwavering dedication to quality – each product is carefully curated to meet the highest standards. The prices are reasonable, and the shipping is fast and reliable. Craftopia has become my go-to source for all things craft-related</p>
                </div>
            </div>
            {/* ___________________ */}
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://i.ibb.co/S5PCXPN/r3.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Ayman sheikh</h4>
                            <span className="text-xs dark:text-gray-600">4 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>Craftopia has exceeded my expectations in every way possible. As an experienced artist, I'm always on the lookout for unique and high-quality materials to fuel my creativity. Craftopia's extensive selection of products never fails to impress – whether I'm searching for premium paints or specialty brushes, I can always find exactly what I need. What sets Craftopia apart is their emphasis on community and collaboration</p>
                    <p> They actively support local artisans and small businesses, fostering a sense of connection and appreciation for handmade goods. My interactions with their customer service team have been nothing short of exceptional – they're friendly, knowledgeable, and always willing to go the extra mile to ensure customer satisfaction. Craftopia has become an indispensable resource for me, and I highly recommend it to fellow artists and crafters alike.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;