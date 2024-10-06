import './App.css'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import path from './constants/path'
import About from './pages/About/About'
import News from './pages/News/News'
import Contact from './pages/Contact/Contact'
import Detail from './pages/Detail/Detail'
import { DarkModeProvider } from './hooks/DarkModeContext'
import NewsDetail from './pages/NewsDetail/NewsDetail'

function App() {
  const route = useRoutes([
    {
      path: path.home,
      element: <Home />
    },
    {
      path: path.about,
      element: <About />
    },
    {
      path: path.news,
      element: <News />
    },
    {
      path: path.contact,
      element: <Contact />
    },
    {
      path: path.detail,
      element: <Detail />
    },
    {
      path: path.newsDetail,
      element: <NewsDetail />
    }
  ])
  return <DarkModeProvider>{route}</DarkModeProvider>
}

export default App
