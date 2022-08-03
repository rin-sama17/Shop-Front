import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import './horizontalSlider.css'

const Commodity = ({ commodity }) => {
  return (
    <Card>
      <CardActionArea className="ActionArea">
        <CardMedia
          className="media-element"
          image={commodity.image}
          title={commodity.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {commodity.title}
          </Typography>
          <Typography variant="body" classame="discounted">
            {commodity.Price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Commodity
