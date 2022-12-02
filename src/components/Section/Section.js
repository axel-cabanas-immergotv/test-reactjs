import Slider from "react-slick";

export default function Section ({title, items}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    return (
        <>
        <h1>{title}</h1>
        <div className="section">
            <Slider {...settings}>
                {items.map(item => {
                    return (
                        <div className="section__slider">
                            <div className="section__slider-content">
                                <div className="section__slider-content-img">
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} />
                                </div>
                                <p>{item.title}</p>
                            </div>
                            
                        </div>
                    )
                })}
            </Slider>
        </div>
        
        </>
    )
}