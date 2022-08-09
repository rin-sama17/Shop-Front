import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Button, Card } from '@material-ui/core'
import './ViweProduct.css'
import Divider from '@material-ui/core/Divider'
import ProductTags from './ProductTags'

// export default function ViweProduct() {
//   return (
//     <Paper className="full-height">
//       <Grid
//         container
//         direction="row"
//         justifyContent="space-evenly"
//         alignItems="stretch"
//       >
//         <Grid item xs={4}>
//           {' '}
//           <Card className="product-picture">
//             <ButtonBase className="product-picture-button">
//               <img
//                 alt="complex"
//                 src="https://dkstatics-public.digikala.com/digikala-products/c1a055b6406dd0d6e66f6532159049af789df97d_1657464363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
//               />
//             </ButtonBase>{' '}
//           </Card>
//         </Grid>
//         <Grid item xs={4} className="product-text">
//           <Typography gutterBottom variant="h4">
//             کفش
//           </Typography>
//           <Divider />
//           <Typography variant="h6" gutterBottom>
//             کفش تن تاک
//           </Typography>{' '}
//           <ProductTags />
//         </Grid>{' '}
//         <Grid item xs={4} className="product-text product-price">
//           <Card className="product-price">
//             <Typography variant="subtitle1">20.000.000 تومان</Typography>

//             <Button
//               variant="contained"
//               color="secondary"
//               className="product-price-button"
//             >
//               افزودن به سبد من
//             </Button>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* <Grid
//         container
//         direction="row-reverse"
//         justifyContent="space-between"
//         alignItems="stretch"
//       >
//         <Grid item></Grid>
//         <Grid item>
//           <Grid item direction="column">
//             <Grid item></Grid>
//             <Grid item></Grid>
//           </Grid>
//           <Grid item></Grid>
//         </Grid>
//       </Grid> */}
//     </Paper>
//   )
// }

import React from 'react'
import Colors from './Colors'
import DetailsThumb from './DetailsThumb'
import { TreeItem } from '@material-ui/lab'
import Comments from './comment/Comments'

class App extends React.Component {
  state = {
    products: [
      {
        _id: '1',
        title: 'کفش تن تاک',
        src: [
          'https://dkstatics-public.digikala.com/digikala-products/c1a055b6406dd0d6e66f6532159049af789df97d_1657464363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
          'https://i.ibb.co/58Mq6Mb/slide1.jpg',
          'https://i.ibb.co/8gwwd4Q/slide2.jpg',
          'https://i.ibb.co/8r7WYJh/slide3.jpg',
        ],
        stock: 'موجود در انبار ',
        price: '20.000.000',
        colors: ['red', 'black', 'crimson', 'teal'],
        count: 1,
      },
    ],
    index: 0,
  }

  myRef = React.createRef()

  handleTab = (index) => {
    this.setState({ index: index })
    const images = this.myRef.current.children
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '')
    }
    images[index].className = 'active'
  }

  componentDidMount() {
    const { index } = this.state
    this.myRef.current.children[index].className = 'active'
  }

  render() {
    const { products, index } = this.state
    return (
      // <div className="app">
      //   {products.map((item) => (
      //     <Grid className="details" key={item._id}>
      //       <Grid item xs={12}>
      //         <Card className="product-picture-card">
      //           <ButtonBase className="product-picture-button">
      //             <img src={item.src[index]} alt="" />
      //           </ButtonBase>{' '}
      //           <ProductTags />
      //         </Card>
      //       </Grid>
      //       <Grid item>
      //         <div className="box">
      //           <div className="row">
      //             <h2>{item.title}</h2>
      //             <span>{item.price}</span>
      //           </div>
      //           <Colors colors={item.colors} />

      //           <span>{item.stock}</span>

      //           <DetailsThumb
      //             images={item.src}
      //             tab={this.handleTab}
      //             myRef={this.myRef}
      //           />
      //
      //         </div>
      //       </Grid>
      //     </Grid>
      //   ))}
      //   <Comments />
      // </div>
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>{item.price} تومان</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.stock}</p>
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <Button
                variant="contained"
                color="secondary"
                className="product-price-button"
              >
                افزودن به سبد من
              </Button>{' '}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App
