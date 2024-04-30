import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const ArtCraftCategories = () => {

    const [categories, setCategories] = useState([])

    // fetch('https://a-10-server-jet.vercel.app/categories')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     setCategories(data)

    // })


    useEffect(() => {
        fetch('https://a-10-server-jet.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)

            })
    }, [])
    return (
        <div>

            <div className="grid grid-cols-3">
                {
                    categories.map(cat =>
                        <Fade key={cat._id} duration={2000} cascade damping={0.2} direction="right">
                            <button >
                                <Link to={`/specificCategories/${cat.subcategory_Name}`} className="btn" key={cat._id}>
                                    <div className="card w-96 bg-base-100  image-full">
                                        <figure><img src={cat.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{cat.subcategory_Name}</h2>
                                            <p>{cat.description}</p>
                                            <small>Used Elements: {cat.used_elements}</small>

                                        </div>
                                    </div>
                                </Link>
                            </button>
                        </Fade>)
                }
            </div>
        </div>
    );
};

export default ArtCraftCategories;