import Carousel from 'react-bootstrap/Carousel';
import './Header.css'
function CarouselFade() {
    return (
        <Carousel  >
            <Carousel.Item  >
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='slieder-text'>
                    <h1 className='carousel-text-title'>Nature always <br /> wears the colors of the spirit</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;