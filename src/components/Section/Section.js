import Slider from "react-slick";

export default function Section ({title, id, items}) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 654,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div key={id} >
            <h1>{title}</h1>
            <div className="section">
                <Slider {...settings}>
                    {items.map(item => {
                        return (
                            <div key={item.id} className="section__slider">
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
        </div>
    )
}