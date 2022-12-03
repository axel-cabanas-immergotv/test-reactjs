import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

export default function Section ({title, id, items}) {
    const navigate = useNavigate()
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
                breakpoint: 654,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    };

    return (
        <div >
            <div className='section__options'>
                <h1>{title}</h1>
                <div className='section__options-btn'>
                    <button>Movie</button>
                    <button>TV</button>
                </div>
            </div>
            <div className="section">
                <Slider {...settings}>
                    {items.map(item => {
                        console.log(item.id)
                        return (
                            <div onClick={() => navigate(`/movie/${item.id}`)} id={item.id} className="section__slider">
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