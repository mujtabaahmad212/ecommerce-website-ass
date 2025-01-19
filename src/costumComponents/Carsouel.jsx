 import React from "react"
 import carsouelimg1 from "../assets/images/camera stand.jpg"

 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
 const Cursouel = ( ) =>{

  return(
 <div className=" bg-blue-500  w-full py-10  relative h-[60vh]">
      <div className=" absolute top-11 right-11">
      <Carousel className="relative max-w-md  ">
        <CarouselPrevious />
        <CarouselContent className="w-full">
          <CarouselItem className="">
            <img
              src={carsouelimg1}
              alt="Slide 1"
              className="w-full h-auto "
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={carsouelimg1}
              alt="Slide 2"
              className="w-full h-auto"
            />
          </CarouselItem>
          <CarouselItem>
            <img
             src={carsouelimg1}
              alt="Slide 3"
              className="w-full h-auto"

            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  )  }
  export default Cursouel;