import banner1 from "../../../assets/Banner/1.jpg";
import banner2 from "../../../assets/Banner/2.jpg";
import banner3 from "../../../assets/Banner/3.jpg";
import banner4 from "../../../assets/Banner/4.jpg";

const Banner = () => {
  const bannerText = (
    <>
      <div className="bg-gradient-to-r flex items-center rounded-xl from-indigo-500 absolute w-full top-0 bottom-0 text ">
        <div className="space-y-7 pl-12 w-1/2  text-white">
          <h1 className="text-4xl font-bold">
            Kits Car helps to find a good smile
          </h1>
          <p className="text-lg">
            Unleash the joy of play with our captivating toy cars! Fuel their
            imagination, ignite their passion, and let the adventures begin.{" "}
            <br /> From sleek speedsters to rugged off-roaders, we have the
            perfect wheels to drive their dreams. Shop now and watch their
            smiles race ahead!
          </p>
          <button className="btn btn-info mr-10">Info</button>
          <button className="btn btn-outline btn-secondary">Button</button>        </div>
      </div>
    </>
  );
  return (
    <div className="carousel w-full mt-12">
      <div id="slide1" className="carousel-item relative w-full h-[450px]">
        <img src={banner1} className="w-full rounded-xl" />
        {bannerText}
        <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[450px]">
        <img src={banner2} className="w-full rounded-xl" />
        {bannerText}
        <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[450px]">
        <img src={banner3} className="w-full rounded-xl" />
        {bannerText}
        <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[450px]">
        <img src={banner4} className="w-full rounded-xl" />
        {bannerText}
        <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
