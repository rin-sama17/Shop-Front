import { useState, useEffect } from 'react'
// import { sliderData } from './sliderData'
import './Slider.css'
import { Button, Card } from '@material-ui/core'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Link } from 'react-router-dom'

const SliderSm = ({ sliders }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderData, setSliderData] = useState([])

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
    setSliderData(sliders)
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])
  return (
    <>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={slide.id}
          >
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext">
                  {`${slideLength}/${currentSlide + 1}`}
                </div>
                <Link to={slide.link}>
                  <img alt="" src={slide.image} className="sliderImage" />
                </Link>
              </div>
              <div className="dotDiv">
                <NavigateNextIcon className="next" onClick={prevSlide} />

                {sliderData.map((slide, index) => {
                  return (
                    <span
                      key={slide.id}
                      className={
                        index === currentSlide ? 'dot dotActive' : 'dot'
                      }
                      onClick={() => setCurrentSlide(index)}
                    ></span>
                  )
                })}
                <NavigateBeforeIcon className="prev " onClick={nextSlide} />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SliderSm
