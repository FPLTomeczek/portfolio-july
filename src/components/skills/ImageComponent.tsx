import { useEffect, useState, useRef } from "react";

const ImageComponent = ({
  src,
  title,
  text,
  index,
}: {
  src: string;
  title: string;
  text: string;
  index: number;
}) => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    const image = imageRef.current;

    if (image) {
      const rect = image.getBoundingClientRect();
      const inViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (inViewport) {
        let newScrollAmount = scrollAmount;

        if (currentScrollTop > lastScrollTop) {
          newScrollAmount = Math.min(newScrollAmount + 5, 40);
        } else if (currentScrollTop < lastScrollTop) {
          newScrollAmount = Math.max(newScrollAmount - 5, -40);
        }

        setScrollAmount(newScrollAmount);
        const newOpacity = (scrollAmount + 40) / 80;
        setOpacity(newOpacity);
      }
    }

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, scrollAmount]);

  return (
    <div
      className={`flex items-center ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <img
        ref={imageRef}
        src={src}
        alt="Your Image"
        className="animate-image w-[400px]"
        style={{ transform: `translateY(${scrollAmount}px)` }}
      />
      <div style={{ opacity: opacity }}>
        <h3 className="text-4xl mb-2 text-secondary-color">{title}</h3>
        <p className="leading-6">{text}</p>
      </div>
    </div>
  );
};

export default ImageComponent;
