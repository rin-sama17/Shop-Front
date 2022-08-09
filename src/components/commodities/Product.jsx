import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import './horizontalSlider.css'

const Product = ({ product }) => {
  return (
    <Card>
      <CardActionArea className="ActionArea">
        <CardMedia
          className="media-element"
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {product.title}
          </Typography>
          <Typography variant="body" classame="discounted">
            {product.Price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Product
