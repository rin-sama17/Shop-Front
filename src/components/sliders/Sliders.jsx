import Slider from './Slider'
import { useEffect } from 'react'
import { sliderData } from './sliderData'
import { Card, Container, Grid } from '@material-ui/core'
import './Slider.css'

function SliderXl() {
  var SlideXlDataOne = []
  var SlideXlDataTwo = []
  useEffect(() => {
    sliderData.map((slide, index) => {
      index % 2 === 0 ? SlideXlDataOne.push(slide) : SlideXlDataTwo.push(slide)
    })
    console.log('SOne:', SlideXlDataOne, '   ', 'STwo:', SlideXlDataTwo)
  }, [])
  return (
    <>
      <Grid container>
        <Grid item lg={6} className="xl-slider">
          <Slider sliders={SlideXlDataOne} />
        </Grid>
        <Grid item lg={6} className="xl-slider">
          <Slider sliders={SlideXlDataTwo} />
        </Grid>{' '}
        <Grid item className="sm-slider">
          <Slider sliders={sliderData} />
        </Grid>{' '}
      </Grid>
    </>
  )
}

export default SliderXl
