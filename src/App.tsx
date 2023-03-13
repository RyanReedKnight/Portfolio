import { useState, FC } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import Header from './components/Header/Header';
import AboutPage from './components/AboutPage/AboutPage'
import PhotosPage from './components/PhotosPage/PhotosPage';

interface AppProps {}


const App:FC<AppProps> = () => {
  
  // Component keys, strings used to map to components, e.g. 'About' maps to <About/>.
  const aboutPage:string = 'AboutPage';
  const photosPage:string = 'PhotosPage';

  // Track key to current page.
  const [currentPage, setCurrentPage] = useState(aboutPage);

  // Define functions for clicking about and photos buttons in Header component
  // These will be pased in as props.
  const clickAboutHandler = () => {
    setCurrentPage(()=> aboutPage);
  }
  const clickPhotosHandler = () => {
    setCurrentPage(()=> photosPage);
  }

  return (
    <div className="App">
      <Header
        clickAboutHandler={clickAboutHandler}
        clickPhotosHandler={clickPhotosHandler}
      />
      
      {/* Whichever key current page holds,
      the coresponding component is loaded */}
      {currentPage===aboutPage && <AboutPage/>}
      {currentPage===photosPage && <PhotosPage/>}

    </div>
  )
}
export default App