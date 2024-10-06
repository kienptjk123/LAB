import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import orchids from '../../data/ListOfOrchids'
import '../../App.css'
import { useState } from 'react'
import category from '../../data/Category'
import { useDarkMode } from '../../hooks/DarkModeContext'

function Home() {
  const [selectCategory, setSelectCategory] = useState('all')
  const [sort, setSort] = useState('newest')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const { isDarkMode } = useDarkMode()

  const totalPages = Math.ceil(orchids.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleChange = (categoryId) => {
    setSelectCategory(categoryId)
  }

  const handleSort = (option) => {
    setSort(option)
  }

  const searchProduct = orchids
    .filter((orchid) => {
      const matchesSearch = orchid.description.toLowerCase().includes(search.toLowerCase())
      const categorySearch = selectCategory === 'all' || orchid.category === selectCategory
      return matchesSearch && categorySearch
    })
    .sort((a, b) => {
      if (sort === 'price-low-high') {
        return a.price - b.price
      } else if (sort === 'price-high-low') {
        return b.price - a.price
      }
      return 0
    })
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div>
      <Header />
      <div className={`${isDarkMode ? 'bg-custom-layout-dark text-white' : ''} py-10 px-60`}>
        <div className='border borer-gray-200 flex'>
          <div className='flex-none w-[250px] border-r px-6 py-5 border-gray-200'>
            <div className='py-4 border-b border-gray-200'>
              <div className='text-xl font-semibold'>Filter by Category</div>
              <div
                onClick={() => handleChange('all')}
                className={`py-3 mt-3 px-7 rounded-lg ${
                  selectCategory === 'all'
                    ? `${isDarkMode ? 'bg-blue-400' : 'bg-custom-heder'}`
                    : `${isDarkMode ? 'hover:bg-blue-400' : 'hover:bg-custom-heder'}`
                } cursor-pointer`}
              >
                All
              </div>
              {category.map((cate) => (
                <div
                  onClick={() => handleChange(cate.name)}
                  className={`py-3 mt-3 px-7 rounded-lg ${
                    selectCategory === cate.name
                      ? `${isDarkMode ? 'bg-blue-400' : 'bg-custom-heder'}`
                      : `${isDarkMode ? 'hover:bg-blue-400' : 'hover:bg-custom-heder'}`
                  } cursor-pointer`}
                  key={cate.id}
                >
                  {cate.name}
                </div>
              ))}
            </div>
            <div className='py-4 border-b border-gray-200'>
              <div className='text-xl font-semibold'>Sort By</div>
              <div className='flex flex-col border-b-gray-200 mt-2'>
                <div
                  className={`${
                    sort === 'newest'
                      ? `${isDarkMode ? 'bg-blue-400' : 'bg-custom-heder'}`
                      : `${isDarkMode ? 'hover:bg-blue-400' : 'hover:bg-custom-heder'}`
                  } py-3 mt-3 px-6 custom rounded-lg cursor-pointer flex gap-2`}
                  onClick={() => handleSort('newest')}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z'
                    />
                  </svg>
                  <div>Newest</div>
                </div>

                <div
                  className={`${
                    sort === 'price-high-low'
                      ? `${isDarkMode ? 'bg-blue-400' : 'bg-custom-heder'}`
                      : `${isDarkMode ? 'hover:bg-blue-400' : 'hover:bg-custom-heder'}`
                  } py-3 mt-3 px-6 custom rounded-lg cursor-pointer flex gap-2`}
                  onClick={() => handleSort('price-high-low')}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25'
                    />
                  </svg>

                  <div>Price: High-Low</div>
                </div>

                <div
                  className={`${
                    sort === 'price-low-high'
                      ? `${isDarkMode ? 'bg-blue-400' : 'bg-custom-heder'}`
                      : `${isDarkMode ? 'hover:bg-blue-400' : 'hover:bg-custom-heder'}`
                  } py-3 mt-3 px-6 custom rounded-lg cursor-pointer flex gap-2`}
                  onClick={() => handleSort('price-low-high')}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12'
                    />
                  </svg>

                  <div>Price: Low-High</div>
                </div>
              </div>
            </div>
          </div>

          <div className='px-5 py-9'>
            <div className='flex justify-between items-center'>
              <div className='font-semibold text-2xl'>Products</div>
              <div className='flex relative justify-center items-center border border-gray-300 px-6 py-3  rounded-xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
                <input
                  type='text'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search Product...'
                  className={`pl-7 ${isDarkMode ? 'bg-custom-layout-dark' : ''} font-light outline-none text-lg`}
                />
              </div>
            </div>
            {searchProduct.length > 0 ? (
              <div className='grid grid-cols-3 mt-5 flex-auto gap-6'>
                {searchProduct.map((orchid) => (
                  <div className='relative' key={orchid.id}>
                    <div className='rounded-xl hover:scale-[102%] border border-gray-200 shadow-md'>
                      {orchid.isSpecial && (
                        <div className='absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg'>Special</div>
                      )}
                      <Link to={`/detail/${orchid.id}`} className='min-h-[150px]'>
                        <img src={orchid.image} alt='' className='w-full h-[300px] rounded-t-xl' />
                      </Link>

                      <div className='px-7 py-5'>
                        <div className='text-2xl line-clamp-1'>{orchid.description}</div>
                        <div className='flex justify-between items-center mt-3'>
                          <div className='flex items-center gap-2'>
                            <div className='text-2xl opacity-55 text-gray-500 line-through'>
                              {orchid.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </div>
                            <div className='text-2xl '>
                              {orchid.promotion && orchid.promotion.includes('%')
                                ? (orchid.price * (1 - parseFloat(orchid.promotion) / 100)).toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                  })
                                : orchid.promotion}
                            </div>
                          </div>
                          <svg height={20} viewBox='0 0 20 12' width={40} className='flex items-center'>
                            <g fill='none' fillRule='evenodd' transform>
                              <rect fill='#00bfa5' fillRule='evenodd' height={9} rx={1} width={12} x={4} />
                              <rect height={8} rx={1} stroke='#00bfa5' width={11} x='4.5' y='.5' />
                              <rect fill='#00bfa5' fillRule='evenodd' height={7} rx={1} width={7} x={13} y={2} />
                              <rect height={6} rx={1} stroke='#00bfa5' width={6} x='13.5' y='2.5' />
                              <circle cx={8} cy={10} fill='#00bfa5' r={2} />
                              <circle cx={15} cy={10} fill='#00bfa5' r={2} />
                              <path
                                d='m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z'
                                fill='#fff'
                              />
                              <path d='m .5 8.5h3.5v1h-3.5z' fill='#00bfa5' />
                              <path d='m0 10.15674h3.5v1h-3.5z' fill='#00bfa5' />
                              <circle cx={8} cy={10} fill='#047565' r={1} />
                              <circle cx={15} cy={10} fill='#047565' r={1} />
                            </g>
                          </svg>
                        </div>
                        <div className='flex mt-5 pb-3'>
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

                          <div className='product-view__discount-badge flex flex-col absolute top-[85%] right-4'>
                            <span className='product-view__discount-badge-rate text-black text-lg'>
                              {orchid.promotion}
                            </span>
                            <span className='text-black'>Giảm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center text-gray-500 text-lg mt-10'>No products found</div>
            )}

            <div className='flex w-full justify-center gap-10 items-center mt-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
                className='size-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z'
                />
              </svg>

              <div>
                {currentPage} / {totalPages}
              </div>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className='size-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
