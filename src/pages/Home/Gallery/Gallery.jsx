import g1 from "../../../assets/Top Collection/1.jpg";
import g2 from "../../../assets/Top Collection/2.jpg";
import g3 from "../../../assets/Top Collection/3.jpg";
import g4 from "../../../assets/Top Collection/4.jpg";
import g5 from "../../../assets/Top Collection/5.jpg";
import g6 from "../../../assets/Top Collection/6.jpg";
// import g7 from "../../../assets/Top Collection/7.jpg";
const Gallery = () => {
  return (
    <div className="text-center mt-12 space-y-5">
      <div className=" text-white">
      <h1 className="text-4xl font-bold">Top Collection</h1>
      <p>Out Top latest toy car collection given bellow for easy to choice. Find out a car for your cute baby.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center items-center mx-auto">
        <div className="card card-compact bg-base-100 mb-12 shadow-xl rounded-xl">
          <figure>
            <img src={g1} alt="Shoes" className="rounded-xl w-[400px] h-80" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 mb-12 shadow-xl rounded-xl">
          <figure>
            <img src={g2} alt="Shoes" className="rounded-xl w-[400px] h-80" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 mb-12 shadow-xl rounded-xl">
          <figure>
            <img src={g3} alt="Shoes" className="rounded-xl w-[400px] h-80" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 mb-12 shadow-xl rounded-xl">
          <figure>
            <img src={g4} alt="Shoes" className="rounded-xl w-[400px] h-80" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 mb-12 shadow-xl rounded-xl">
          <figure>
            <img src={g5} alt="Shoes" className="rounded-xl w-[400px] h-80" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 mb-12 shadow-xl rounded-xl">
          <figure>
            <img src={g6} alt="Shoes" className="rounded-xl w-[400px] h-80" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
