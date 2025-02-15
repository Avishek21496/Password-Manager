import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const AddCraftItems = () => {
    const {user}=useContext(AuthContext)
    console.log('test user', user)
    const handleAddCraft = e =>{
        
        console.log(user)
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const platform_name = form.get('platform')
        const platform_owner = form.get('owner')
        const playform_email = form.get('email')
        const platform_password = form.get('password')
        const user_email = user.email
        const user_name = user.displayName

        const savedPlatform = {user_name,user_email, platform_name, platform_owner, playform_email, platform_password}

        console.log(savedPlatform)
        
        // const image = form.get('image')
        // const item_name = form.get('item_name')
        // const subcategory_Name = form.get('subcategory_Name')
        // const price = form.get('price')
        // const short_description = form.get('short_description')
        // const rating = form.get('rating')
        // const customization = form.get('customization')
        // const processing_time = form.get('processing_time')
        // const stock_status = form.get('stock_status')
        // const user_email = form.get('user_email')
        // const user_name = form.get('user_name')
        // console.log(image, item_name, subcategory_Name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name);

        // const addedItem = {image, item_name, subcategory_Name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name};

        //now send data to the server
        // fetch('https://a-10-server-jet.vercel.app/items',{
        fetch('http://localhost:5000/save',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(savedPlatform)
        })
        .then(res => res.json())
        .then(data => {
            // if(data.insertedId){
            //     toast.success('Item added successfully')
            //     e.target.reset()
            // }
            console.log(data)
        })
    }
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleAddCraft} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Platform</label>
                            <input id="firstname" type="text" name="platform" placeholder="Enter Platform Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Owner</label>
                            <input id="lastname" name="owner" type="text" placeholder="Enter the owner Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Owner</label>
                            <input id="lastname" name="email" type="text" placeholder="Enter email address" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">password</label>
                            <input id="lastname" name="password" type="text" placeholder="Enter password" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className=" col-span-full">
                            <button className="btn btn-info border-2 w-full border-red-800" type="submit">Add </button>
                        </div>
                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default AddCraftItems;