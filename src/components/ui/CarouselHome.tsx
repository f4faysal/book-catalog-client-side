import carouselImg1 from "../../assets/images/bookcoverssmall2.jpg";
import carouselImg2 from "../../assets/images/bookdisplaysmall.jpg";
import carouselImg3 from "../../assets/images/bookstackssmall.jpg";
export function CarouselHome() {
  return (
    <>
      <div className="carousel w-full h-[500px]">
        <div id="item1" className="carousel-item w-full ">
          <img src={carouselImg1} className="w-full object-cover" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={carouselImg2} className="w-full object-cover" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={carouselImg3} className="w-full object-cover" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </>
  );
}
