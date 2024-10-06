import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import newsData from '../../data/News'
import { useDarkMode } from '../../hooks/DarkModeContext'

function News() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className=''>
      <Header />
      <div className={`${isDarkMode ? 'bg-custom-layout-dark text-white' : ''}`}>
        <div className='container mx-auto px-4 py-12 '>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold'>Latest News</h1>
            <p className='text-lg'>Stay updated with the latest happenings and trends in the world of orchids.</p>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>
            {newsData.map((news) => (
              <div
                key={news.id}
                className='rounded-lg hover:scale-[102%] border border-gray-200 shadow-lg overflow-hidden'
              >
                <img src={news.imageUrl} alt={news.title} className='w-full h-80 object-cover' />
                <div className='p-6'>
                  <h2 className='text-2xl font-bold  mb-2'>{news.title}</h2>
                  <p className='text-sm '>{news.date}</p>
                  <p className='mt-4 '>{news.summary}</p>
                  <Link
                    to={`/news/${news.id}`}
                    className='inline-block mt-6 text-blue-600 hover:text-blue-500 font-semibold transition duration-300'
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default News
