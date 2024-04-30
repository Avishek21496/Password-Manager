import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const { id } = useParams();
    const [singleItem, setSingleItem] = useState({})

    const {image, item_name, subcategory_Name, price, short_description, rating, customization, processing_time, stock_status} = singleItem;

    useEffect(() => {
        fetch(`https://a-10-server-jet.vercel.app/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleItem(data)
            })
    }, [id])
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Item name: {item_name}</p>
                                <p className="text-lg font-medium leading-snug">Subcategory: {subcategory_Name}</p>
                                <p className="text-lg font-medium leading-snug">Price: {price}</p>
                                <p className="text-lg font-medium leading-snug">Rating: {rating}</p>
                                <p className="text-lg font-medium leading-snug">Customization: {customization}</p>
                                <p className="text-lg font-medium leading-snug">Processing Time: {processing_time}</p>
                                <p className="text-lg font-medium leading-snug">Stock Status: {stock_status}</p>
                                <p className="leading-snug">{short_description}</p>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;