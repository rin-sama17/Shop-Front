import { useState, useEffect } from 'react'
import { sliderData } from './sliderData'
import './Slider.css'
import { Button } from '@material-ui/core'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideLength = sliderData.length

  const autoScroll = true
  let slideInterval
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  function auto() {
    // slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])

  return (
    <div id="parent" className="slider">
      <div id="child">
        <NavigateBeforeIcon className="arrow prev" onClick={prevSlide} />
        <NavigateNextIcon className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? 'slide current' : 'slide'}
              key={slide.id}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="slide" />
                  <div className="content">
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <Button>اطلاعات بیشتر</Button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
        <Button className="counter" variant="contained">
          {`${slideLength}/${currentSlide + 1}`}
        </Button>
      </div>
    </div>
  )
}

export default Slider
