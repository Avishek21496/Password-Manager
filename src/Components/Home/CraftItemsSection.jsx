import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Fade } from "react-awesome-reveal";


const CraftItemsSection = () => {

    // const {user}=useContext(AuthContext)

    const [cardItems, setCardItems] = useState([]);

    // useEffect(() => {
    //     fetch(`https://a-10-server-jet.vercel.app/myItems/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setCardItems(data)

    //         })
    // }, [user])

    useEffect(() => {
        fetch('https://a-10-server-jet.vercel.app/items')
            .then(res => res.json())
            .then(data => setCardItems(data))
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                cardItems.slice(0, 6).map(i =>

                    <Fade key={i._id} duration={1000} direction="down" cascade damping={0.2}>
                        <div   className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={i.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{i.item_name}</h2>
                            <p>{i.short_description.slice(0,100)}.......</p>
                            <p>Price: {i.price}</p>
                            <p>Availability: {i.stock_status}</p>
                            <div className="card-actions justify-center">
                            <Link className="btn" to={`/viewDetails/${i._id}`}><button>View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    </Fade>

                )
            }
        </div>
    );
};

export default CraftItemsSection;