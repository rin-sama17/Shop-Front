import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import './post/post.css'

function Post() {
  return (
    <Card>
      <CardActionArea className="ActionArea">
        <CardMedia
          className="media-element"
          image="https://dkstatics-public.digikala.com/digikala-products/c1a055b6406dd0d6e66f6532159049af789df97d_1657464363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          title="پست اول"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            کفش
          </Typography>
          <Typography variant="body" classame="discounted">
            2,000,000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Post
