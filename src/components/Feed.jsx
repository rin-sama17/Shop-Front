import { Container, Typography } from '@material-ui/core'
import Post from './Post'
import './post/post.css'

function Feed() {
  return (
    <Container>
      <Typography variant="h5">پرطرفدارترین ها</Typography>
      <div class="media-scroller snaps-inline">
        <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post />{' '}
        <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
      </div>
    </Container>
  )
}

export default Feed
