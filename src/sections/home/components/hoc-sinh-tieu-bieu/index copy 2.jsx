

"use client"
import { useState, useEffect } from "react";

const items = [
  {
    icon: "face",
    copy: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }, {
    icon: "pets",
    copy: '02. Sed do eiusmod tempor incididunt ut labore.'
  }, {
    icon: "stars",
    copy: '03. Consectetur adipiscing elit.'
  }, {
    icon: "invert_colors",
    copy: '04. Ut enim ad minim veniam, quis nostrud exercitation.'
  }, {
    icon: "psychology",
    copy: '05. Llamco nisi ut aliquip ex ea commodo consequat.'
  }, {
    icon: "brightness_7",
    copy: '06. Misi ut aliquip ex ea commodo consequat.'
  }
];

const Card = (props) => {
  return (
    <li className={(props.currentSlide === props.index ? "scale-150" : "") + "card"}>
      <span class="material-icons">{props.icon}</span>
      <p>{props.copy}</p>
    </li>
  )
}

const HocSinhTieuBieu = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);


  const [currentSlide, setCurrentSlide] = useState(3);

  console.log('currentSlide', currentSlide);
  const nextSlide = () => {
    const center = document.querySelector('.card:nth-child(3)')
    center.style.display = "none"
    setMoveClass('next')
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1));
  };

  const prevSlide = () => {
    setMoveClass('prev')
    setCurrentSlide((prevSlide) => (prevSlide === carouselItems.length ? 1 : prevSlide + 1));
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems])

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();//cat cuoi
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }

  const shiftNext = (copy) => {
    let firstcard = copy.shift();//cat dau
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }

  return (
    <div className="relative">
      <div className="ui w-screen">
        <button onClick={nextSlide} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={prevSlide} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <div className="w-screen">
        <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} w-max carousel`}>
          {carouselItems.map((t, index) => (
            // <Card currentSlide={currentSlide} index={index} key={t.copy + index} icon={t.icon} copy={t.copy} />
            <li className={"card"}>
              <span class="material-icons">{t.icon}</span>
              <p>{t.copy}</p>
            </li>)
          )}
        </ul>
      </div>
    </div>
  )
}

export default HocSinhTieuBieu


