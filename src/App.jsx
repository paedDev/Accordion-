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
import LightToDark from './components/LDM/LightToDark'
import CustomScroll from './components/Custom Scroll Indicator/CustomScroll'
import CS from './components/Custom Scroll Indicator/CS'
import AccordianP2 from './components/Accordian/AccordianP2'


import Tabtest from './components/Custom-Tabs/tab-test'

import TabsTest2 from './components/TabsComponent/Tabs-test'

import GithubProfileFinder from './components/Github Finder/GithubProfileFinder'
import ColorPicker from './components/ColorPicker/ColorPicker'
import SearchAuto from './components/Search Auto/SearchAuto'
import Search from './components/AutoComplete/Search'

import TictTactToe from './components/Tic-tact-toe/TictTactToe'
import TTT from './components/Tic-tact-toe/TTT'

import TabTest from './components/Tabs/TabTestNew'
import ModalTest from './components/PopUp/ModalTest'
import Index from './components/GithubFinder'
import FeatureFlags from './components/FF'
import FeatureFlagGlobalState from './components/FF/context'
import TicTacToe from './components/Practice/TicTacToe/TicTacToe'
// import ModalTest from './components/Custom-modal-popup/modal-test'
import UseFetchHookTest from './components/UseFetch Custom hook/Test'
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
      {/* <CS url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <TabTest /> */}


      {/* Feature Flag Implementation */}


      {/* tictactoe */}
      <UseFetchHookTest />
    </>
  )
}

export default App