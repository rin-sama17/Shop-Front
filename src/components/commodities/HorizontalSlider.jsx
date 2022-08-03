import { Typography } from '@material-ui/core'
import Commodity from './Commodity'
import './horizontalSlider.css'
import { commoditiesData } from './commoditiesData'
import { useRef } from 'react'

function HorizontalSlider() {
  let isDown = false
  let startX
  let scrollLeft

  const slider = useRef(null)
  const whenmousedown = (e) => {
    isDown = true
    e.target.classList.add('active')
    startX = e.pageX - slider.current.offsetLeft
    scrollLeft = slider.current.scrollLeft
  }
  const whenmouseleave = () => {
    isDown = false
    slider.current.classList.remove('active')
  }
  const whenmouseup = () => {
    isDown = false
    slider.current.classList.remove('active')
  }
  const whenmousemove = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.current.offsetLeft
    const walk = (x - startX) * 3 //scroll-fast
    slider.current.scrollLeft = scrollLeft - walk
  }
  return (
    <div>
      <Typography variant="h5">پرطرفدار</Typography>

      <div
        className="media-scroller snaps-inline items"
        ref={slider}
        onMouseDown={whenmousedown}
        onMouseLeave={whenmouseleave}
        onMouseUp={whenmouseup}
        onMouseMove={whenmousemove}
      >
        {commoditiesData.map((p) => (
          <Commodity key={p.id} commodity={p} className={`item item${p.id}`} />
        ))}
      </div>
    </div>
  )
}

export default HorizontalSlider
