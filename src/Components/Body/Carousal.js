import React from 'react'
import skull from '../../Images/skull400.png'
import hand from '../../Images/Hand400.png'
import inspection from '../../Images/inspection400.png'
import matched from '../../Images/dev400.png'

export default function Carousal() {
  return (
    <>
    
    <div id="carouselExampleCaptions" className="carousel slide relative w-[340px] md:w-[550px]" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src={skull}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption md:block absolute text-center">
        <h5 className="text-lg font-[quicksand] font-bold">You find yourself close to the valley of product death ☠️</h5>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src={hand}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption md:block absolute text-center">
        <h5 className="text-lg font-[quicksand] font-bold">You confess your product needs by chat on Volods.com</h5>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src={inspection}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption md:block absolute text-center">
        <h5 className="text-lg font-[quicksand] font-bold">An expert on our team reviews our list of developers</h5>
      </div>
    </div>

    <div className="carousel-item relative float-left w-full">
      <img
        src={matched}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption md:block absolute text-center">
        <h5 className="text-lg font-[quicksand] font-bold">A developer is matched and offered to you</h5>
     </div>
    </div>
    
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
