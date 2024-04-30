import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SpecificCategoriesItems = () => {
    const { subCategory } = useParams()
    const [subCategories, setSubCategories] = useState([])
    useEffect(() => {
        fetch(`https://a-10-server-jet.vercel.app/subCategory/${subCategory}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.length)
                setSubCategories(data)
            })
    }, [subCategory])
    return (
        <div>
            
            <div className="grid grid-cols-3">
                {
                    subCategories.map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.item_name}</h2>
                            <p>Subcategory Name: {item.subcategory_Name}</p>
                            <p> {item.short_description}</p>
                            <p>Price {item.price}</p>
                            <p>Rating {item.rating}</p>
                            <p>Processing Time:  {item.processing_time}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/viewDetails/${item._id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SpecificCategoriesItems;