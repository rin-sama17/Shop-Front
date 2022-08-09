import { Typography } from '@material-ui/core'
import Product from './Product'
import './horizontalSlider.css'
import { productData } from './productData'
import { useEffect, useRef } from 'react'

function Feed() {
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
        {productData.map((p) => (
          <Product key={p.id} product={p} className={`item item${p.id}`} />
        ))}
      </div>
    </div>
  )
}

export default Feed
