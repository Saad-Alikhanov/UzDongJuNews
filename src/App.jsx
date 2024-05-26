import NavBar from './components/NavBar'
import VideoPost from './components/VideoPost'
import TextNews from './components/TextNews'
import Products from './components/Products'
import VideoPostForm from './components/VideoPostForm'
import TextPostForm from './components/TextPostForm'
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
      <VideoPostForm></VideoPostForm>
      <TextPostForm></TextPostForm>
    </>
  )
}

export default App
