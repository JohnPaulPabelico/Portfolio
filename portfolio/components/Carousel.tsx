import React, { ReactElement, useEffect, useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  readonly children: ReactElement[];
  readonly autoSlide?: boolean;
  readonly autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = useCallback(() => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-4">
        <button className="group p-1 rounded-full shadow-lg bg-white/80 hover:bg-white/100 transition">
          <FaChevronLeft
            className="group-hover:text-blue-400 transition text-black/50"
            size={25}
            onClick={prev}
          />
        </button>
        <button className="group p-1 rounded-full shadow-lg bg-white/80 hover:bg-white/100 transition">
          <FaChevronRight
            className="group-hover:text-blue-400 transition text-black/50"
            size={25}
            onClick={next}
          />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-white rounded-full ${
                curr === i ? "p-1" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
