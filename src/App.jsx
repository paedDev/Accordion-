import React from 'react'
import Acc from './components/Accordian/Acc'
// import RandomColor from './components/RandomColor/RandomColor'
import RC from './components/RandomColor/RC'
// import StarRating from './components/Star Rating/StarRating'
import SR from './components/Star Rating/SR'
// import Accordian from './components/Accordian/Accordian'
import ImageSlider from './components/ImageSlider/ImageSlider'
import IS from './components/ImageSlider/IS'
import LoadMore from './components/Load More Btn/LoadMore'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import ImageSlide from './components/ImageSlider/ImageSlide'
import QrCode from './components/qr-code/QrCode'
import Light2DarkMode from './components/Light-dark-mode/Light2DarkMode'
import LightDarkMode from './components/LDmode/LightDarkMode'
const App = () => {
  return (
    <>

      {/* < Acc />
      <RC />
      <SR noOfStars={5} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <IS url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <ImageSlide url={"https://picsum.photos/v2/list"} page={"20"} limit={"10"} /> */}
      {/* <QrCode /> */}
      <LightDarkMode />

    </>
  )
}

export default App