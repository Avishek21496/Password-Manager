import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const AllArtCraftItems = () => {

    const {reload, setReload} = useContext(AuthContext)

    const [allCraft, setAllCraft] = useState([])
    useEffect( ()=>{
        fetch('https://a-10-server-jet.vercel.app/items')
        .then(res=> res.json())
        .then(data => {
            setAllCraft(data)
            setReload(false)
        } )
    },[reload, setReload])

    // const loadedItems = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        allCraft?.map(i => <tr key={i._id}>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={i.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{i.item_name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {i.short_description}
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>{i.price}</td>
                            <th>
                                <Link to={`/viewDetails/${i._id}`}><button  className="btn btn-ghost btn-xs">View Details</button></Link>
                            </th>
                        </tr>)
                    }

                </tbody>
                {/* foot */}


            </table>
        </div>
    );
};

export default AllArtCraftItems;