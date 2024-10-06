import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import orchids from '../../data/ListOfOrchids'
import { useState } from 'react'
import { useDarkMode } from '../../hooks/DarkModeContext'

function Detail() {
  const { id } = useParams()
  const orchid = orchids.find((o) => o.id === parseInt(id))
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { isDarkMode } = useDarkMode()

  return (
    <div>
      <Header />
      <div className={`${isDarkMode ? 'bg-custom-layout-dark text-white' : ''} py-10 px-60`}>
        <div className='border border-gray-200 px-10 py-10'>
          <div className='flex'>
            <div className='flex-none w-[600px]'>
              <div className='h-[500px]'>
                <img src={orchid.image} alt='' className='w-full rounded-lg h-full' />
              </div>
              <button
                onClick={() => setIsVideoOpen(true)}
                className={`w-full text-2xl hover:bg-blue-300 py-4 rounded-lg ${
                  isDarkMode ? 'bg-blue-400' : 'bg-custom-heder'
                } mt-10`}
              >
                Play video
              </button>
            </div>

            <div className='flex-auto px-16'>
              <div className='text-lg w-32 rounded-xl h-8 text-center bg-custom-heder'>{orchid.category}</div>
              <div className='text-3xl font-semibold mt-3'>{orchid.description}</div>
              <div className='text-xl mt-3 text-justify'>{orchid.descriptionDetail}</div>
              <div className='flex items-center gap-20 mt-3'>
                <div className='flex gap-2'>
                  <div className='text-3xl opacity-55 text-gray-500 line-through'>
                    {orchid.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </div>
                  <div className='text-3xl font-semibold'>
                    {orchid.promotion && orchid.promotion.includes('%')
                      ? (orchid.price * (1 - parseFloat(orchid.promotion) / 100)).toLocaleString('vi-VN', {
                          style: 'currency',
                          currency: 'VND'
                        })
                      : orchid.promotion}
                  </div>
                </div>
                <div className='flex gap-1 px-2 py-2 bg-custom-heder items-center'>
                  <span className=' text-black text-lg'>{orchid.promotion}</span>
                  <span className='text-black'>Giảm</span>
                </div>
              </div>
              <div className='flex mt-3'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    viewBox='0 0 24 24'
                    fill={i < orchid.rating ? 'gold' : 'none'}
                    stroke='gold'
                    strokeWidth='2'
                    className='star'
                  >
                    <path d='M12 17.27L18.18 21 16.54 13.97l5.09-4.73-6.26-.53L12 2 9.64 8.71l-6.26.53 5.09 4.73L5.82 21z' />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {isVideoOpen && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg relative'>
            <button className='absolute -top-8 -right-3 text-white text-3xl' onClick={() => setIsVideoOpen(false)}>
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='40' height='40' viewBox='0 0 48 48'>
                <path fill='#F44336' d='M21.5 4.5H26.501V43.5H21.5z' transform='rotate(45.001 24 24)'></path>
                <path fill='#F44336' d='M21.5 4.5H26.5V43.501H21.5z' transform='rotate(135.008 24 24)'></path>
              </svg>
            </button>
            <iframe
              width={900}
              height={550}
              src={orchid.link}
              title='YouTube video player'
              frameBorder={0}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail
