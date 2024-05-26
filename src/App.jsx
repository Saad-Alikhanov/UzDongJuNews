import NavBar from './components/NavBar'
import VideoPost from './components/VideoPost'
import TextNews from './components/TextNews'
import Products from './components/Products'
import './css/layout.css'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className='news-container'>
        <VideoPost></VideoPost>
        <TextNews></TextNews>
      </div>
      <Products></Products>
    </>
  )
}

export default App
