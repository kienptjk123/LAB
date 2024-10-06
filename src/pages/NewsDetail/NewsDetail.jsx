import { Link, useParams } from 'react-router-dom'
import newsData from '../../data/News'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function NewsDetail() {
  const { id } = useParams()
  const news = newsData.find((n) => n.id === parseInt(id))

  return (
    <div className=''>
      <Header />
      <div className='container mx-auto px-4 py-12'>
        <div className='mb-10'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>{news.title}</h1>
          <p className='text-sm text-gray-500'>{news.date}</p>
        </div>

        <img src={news.imageUrl} alt={news.title} className='w-full h-[500px] object-cover rounded-lg mb-6' />

        <p className='text-2xl text-gray-600 mb-6'>{news.summary}</p>

        <div className='text-base text-gray-800'>
          <p className='text-2xl'>{news.content}</p>
        </div>

        <div className='text-base text-gray-800'>
          <p className='text-xl text-justify mt-2'>{news.descriptionDetail}</p>
        </div>

        <Link to='/news' className='inline-block mt-10 text-indigo-600 hover:underline'>
          Back to News
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default NewsDetail
