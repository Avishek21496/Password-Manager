import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Update = () => {
    const {user, setReload} = useContext(AuthContext)
    const loadedItem = useLoaderData()
    // const {id} = useParams();
    const {_id, image, item_name, subcategory_Name, price, short_description, rating, customization, processing_time, stock_status } = loadedItem;
    // console.log(_id)

    const handleUpdate = e =>{
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

        const updateInfo = {image, item_name, subcategory_Name, price, short_description, rating, customization, processing_time, stock_status }
        //update info 
        fetch(`https://a-10-server-jet.vercel.app/items/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then( res => res.json())
        .then( data => {
            if(data.modifiedCount>0){
                setReload(true);
                toast.success('Your information has been successfully updated.', {duration: 3000})
            }
            console.log(data)})
    }

    return (
        // <div>
            
            <section className="p-3 border-2 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleUpdate}  noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-4 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Image URL</label>
                                <input id="firstname" type="text" name="image" defaultValue={image} placeholder="Enter the image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Item Name</label>
                                <input id="lastname" name="item_name" type="text" defaultValue={item_name} placeholder="Enter the Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="email" className="text-sm">Subcategory Name</label>
                                {/* <input id="email" type="text" placeholder="Enter the Subcategory Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
                                <select className=" border-2 m-3 p-2" id="answer" defaultValue={subcategory_Name} name="subcategory_Name">
                                    <option value="Land">Landscape Painting</option>
                                    <option value="Portrait">Portrait Drawing</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="email" className="text-sm">Price</label>
                                <input id="email" type="text" name="price" defaultValue={price} placeholder="Enter the price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-3">
                                <label htmlFor="address" className="text-sm">Short Description </label>
                                <textarea id="address" name="short_description" defaultValue={short_description} placeholder="Enter a Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">Rating</label>
                                <input id="city" type="range" name="rating" min='1' max='5' defaultValue={rating} placeholder="1" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="state" className="text-sm">Customization</label>
                                {/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
                                <select className=" border-2 m-3 p-2" id="answer" defaultValue={customization} name="customization">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="email" className="text-sm">Processing Time</label>
                                <input id="email" type="text" defaultValue={processing_time} name="processing_time" placeholder="Enter the price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="state" className="text-sm">Stock Status</label>
                                {/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
                                <select className=" border-2 m-3 p-2" id="answer" defaultValue={stock_status} name="stock_status">
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
                                <button className="btn border-2 w-full border-red-800" type="submit">Update</button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        // </div>
    );
};

export default Update;