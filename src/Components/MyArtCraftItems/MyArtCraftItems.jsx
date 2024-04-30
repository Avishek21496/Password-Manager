import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArtCraftItems = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const [myItems, setMyItems] = useState([])
    const [reload, setReload] = useState(true)


    useEffect(() => {
        fetch(`https://a-10-server-jet.vercel.app/myItems/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyItems(data)

            })
    }, [reload, user])


    const handleFilter = (fil) => {
        console.log(fil)
        fetch(`https://a-10-server-jet.vercel.app/myItems/filter/${user.email}/${fil}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyItems(data)

            })

    }

    const handleDelete = id => {



        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        //   }).then((result) => {

        //     fetch(`https://a-10-server-jet.vercel.app/myItems/${id}`, {
        //     method: 'DELETE'
        //     })
        //     .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     if (data.deletedCount > 0) {
        //         setReload(!reload)
        //         console.log('deleted')
        //         if (result.isConfirmed) {
        //             Swal.fire({
        //               title: "Deleted!",
        //               text: "Your item has been deleted.",
        //               icon: "success"
        //             });
        //           }
        //     }
        // })
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a-10-server-jet.vercel.app/myItems/${id}`, {
                method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0){
                        setReload(!reload)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    
                } )
                
            }
        });
    }

    return (
        <div>
            <h2>My item: {myItems?.length}</h2>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">Customization</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter("yes")}><button>Yes</button></li>
                    <li onClick={() => handleFilter("no")}><button>No</button></li>
                </ul>
            </div>
            <div className="grid grid-cols-3">
                {
                    myItems?.map(i =>
                        <div key={i._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex space-x-4">
                                {/* <img alt="" src={user.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" /> */}
                                <div className="flex flex-col space-y-1">
                                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{i.item_name}</a>
                                    <span className="text-xs dark:text-gray-600">Rating: {i.rating}</span>
                                </div>
                            </div>
                            <div>
                                <img src={i.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                                <h2 className="mb-1 text-xl font-semibold">{i.price}</h2>
                                <p className="text-sm dark:text-gray-600">Customization: {i.customization}</p>
                                <p className="text-sm dark:text-gray-600">Stock Status: {i.stock_status}</p>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="space-x-2">
                                    <Link to={`/update/${i._id}`}><button className="btn">Update</button></Link>
                                </div>
                                <div className="flex space-x-2 text-sm dark:text-gray-600">
                                    <button onClick={() => handleDelete(i._id)} className="btn ">Delete</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyArtCraftItems;