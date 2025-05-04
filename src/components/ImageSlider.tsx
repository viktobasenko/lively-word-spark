
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageSliderProps {
  images: string[];
  autoplayInterval?: number;
}

const ImageSlider = ({ images, autoplayInterval = 5000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide, autoplayInterval]);

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="flex justify-center p-1">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="rounded-lg shadow-xl max-h-[500px] w-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default ImageSlider;
