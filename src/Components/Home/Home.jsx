
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../src/styles/styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CraftItemsSection from "./CraftItemsSection";
import ArtCraftCategories from "../ArtCraftCategories/ArtCraftCategories";
import Faq from "./Faq";
import Carrear from "./Carrear";
import Review from "./Review";
import { Fade } from "react-awesome-reveal";



const Home = () => {
    return (
        <div>
            <div className="">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src="https://i.ibb.co/1XznTp9/istockphoto-1033130600-1024x1024.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/tZhBpBY/ai-generated-7790635-1280.webp" alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img src="https://i.ibb.co/zfPLs66/house-1867187-640.jpg" alt="" /></SwiperSlide> */}
                    <SwiperSlide><img src="https://i.ibb.co/KqkjfWB/painting-3995999-1280.webp" alt="" /></SwiperSlide>


                </Swiper>
            </div>

            <div className="p-5">
                <div className="text-center p-5">
                    <Fade direction="up" cascade damping={0.3}><h2 className="text-4xl">Craft Items</h2>
                        <p className="p-2">Discover artisanal treasures that ignite creativity and imagination. From handmade wonders to curated collections, explore a world of craftsmanship that celebrates tradition and innovation. Elevate your space with unique pieces that tell stories and inspire connections. Unleash your inner artist with our diverse range of craft items, meticulously crafted to bring joy and beauty into every corner of your life.</p>
                    </Fade>
                </div>
                <div className="flex justify-center mx-auto">

                    <CraftItemsSection></CraftItemsSection>
                </div>
            </div>
            <div className="text-center p-5 flex flex-col justify-center mx-auto">
                <Fade direction="up" cascade damping={0.3}><h2 className="text-4xl">Art &Craft Categories Section</h2>
                    <p className="p-4 pb-5">Here you can find all our art and craft items under different categories.</p>
                </Fade>
                <ArtCraftCategories></ArtCraftCategories>
            </div>
            <Faq></Faq>
            <Carrear></Carrear>
            <Review></Review>
        </div>
    );
};

export default Home;