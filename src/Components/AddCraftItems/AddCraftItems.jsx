import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const AddCraftItems = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const handleAddCraft = e =>{
        
        console.log(user)
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        
        const image = form.get('image')
        const item_name = form.get('item_name')
        const subcategory_Name = form.get('subcategory_Name')
        const price = form.get('price')
        const short_description = form.get('short_description')
        const rating = form.get('rating')
        const customization = form.get('customization')
        const processing_time = form.get('processing_time')
        const stock_status = form.get('stock_status')
        const user_email = form.get('user_email')
        const user_name = form.get('user_name')
        console.log(image, item_name, subcategory_Name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name);

        const addedItem = {image, item_name, subcategory_Name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name};

        //now send data to the server
        fetch('https://a-10-server-jet.vercel.app/items',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(addedItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Item added successfully')
                e.target.reset()
            }
        })
    }
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleAddCraft} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Image URL</label>
                            <input id="firstname" type="text" name="image" placeholder="Enter the image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Item Name</label>
                            <input id="lastname" name="item_name" type="text" placeholder="Enter the Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="email" className="text-sm">Subcategory Name</label>
                            {/* <input id="email" type="text" placeholder="Enter the Subcategory Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
                            <select className=" border-2 m-3 p-2" id="answer" name="subcategory_Name">
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-1">
                            <label htmlFor="email" className="text-sm">Price</label>
                            <input id="email" type="text" name="price" placeholder="Enter the price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="address" className="text-sm">Short Description </label>
                            <textarea id="address" name="short_description" placeholder="Enter a Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">Rating</label>
                            <input id="city" type="range" name="rating" min='1' max='5' placeholder="1" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-1">
                            <label htmlFor="state" className="text-sm">Customization</label>
                            {/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
                            <select className=" border-2 m-3 p-2" id="answer" name="customization">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="email" className="text-sm">Processing Time</label>
                            <input id="email" type="text" name="processing_time" placeholder="Enter the price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-1">
                            <label htmlFor="state" className="text-sm">Stock Status</label>
                            {/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
                            <select className=" border-2 m-3 p-2" id="answer" name="stock_status">
                                <option value="In Stock">In Stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="zip" className="text-sm">User Email</label>
                            <input id="zip" name="user_email" type="text" readOnly defaultValue={user.email} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="zip" className="text-sm">User Name</label>
                            <input id="zip" name="user_name" type="text" defaultValue={user.displayName} readOnly placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className=" col-span-full">
                            <button className="btn border-2 w-full border-red-800" type="submit">Add </button>
                        </div>
                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default AddCraftItems;