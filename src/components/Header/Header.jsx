import { NavLink } from 'react-router-dom'
import svg from '../../assets/flower-svgrepo-com.svg'
import { useDarkMode } from '../../hooks/DarkModeContext'

function Header() {
  const navigation = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'News',
      path: '/news'
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact'
    }
  ]

  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div
      className={`py-10 px-60 border-b flex justify-between items-center ${
        isDarkMode ? 'bg-custom-layout-dark text-white' : 'bg-white'
      } border-gray-200`}
    >
      <div className='flex gap-5 items-center'>
        <div className=''>
          <img src={svg} alt='' className='h-12 w-12 animate-slow-spin' />
        </div>
        <div className='text-3xl font-semibold'>Orchids Shop</div>
      </div>
      <div className='flex gap-5 mr-14'>
        {navigation.map((navigate) => (
          <NavLink
            key={navigate.id}
            to={navigate.path}
            className={({ isActive }) => {
              const active = isActive ? ` ${isDarkMode ? 'bg-blue-400' : 'bg-custom-heder'}` : ''
              return `${active} text-2xl px-5 py-2 rounded-lg`
            }}
            end
          >
            {navigate.name}
          </NavLink>
        ))}

        <div>
          <input
            type='checkbox'
            name='light-switch'
            id='light-switch'
            className='light-switch cn8jz'
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <label
            className={`flex items-center justify-center cukve cvdqj cw5z1 c76um c5flv cue4z cmwfi rounded-full cursor-pointer py-[14px] px-[14px] ${
              isDarkMode ? 'bg-gray-500 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
            }   `}
            htmlFor='light-switch'
          >
            {isDarkMode ? (
              <svg
                className='cp14x ch0mp cbm9w c2e1r cursor-pointer'
                width={20}
                height={20}
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M11.875 4.375a.625.625 0 1 0 1.25 0c.001-.69.56-1.249 1.25-1.25a.625.625 0 1 0 0-1.25 1.252 1.252 0 0 1-1.25-1.25.625.625 0 1 0-1.25 0 1.252 1.252 0 0 1-1.25 1.25.625.625 0 1 0 0 1.25c.69.001 1.249.56 1.25 1.25Z' />
                <path d='M7.019 1.985a1.55 1.55 0 0 0-.483-1.36 1.44 1.44 0 0 0-1.53-.277C2.056 1.553 0 4.5 0 7.9 0 12.352 3.648 16 8.1 16c3.407 0 6.246-2.058 7.51-4.963a1.446 1.446 0 0 0-.25-1.55 1.554 1.554 0 0 0-1.372-.502c-4.01.552-7.539-2.987-6.97-7ZM2 7.9C2 5.64 3.193 3.664 4.961 2.6 4.82 7.245 8.72 11.158 13.36 11.04 12.265 12.822 10.341 14 8.1 14 4.752 14 2 11.248 2 7.9Z' />
              </svg>
            ) : (
              <svg
                className='cp14x ch0mp cbm9w c1bco'
                width={20}
                height={20}
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8 0a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z' />
                <path d='M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' />
                <path d='M13.657 3.757a1 1 0 0 0-1.414-1.414l-.354.354a1 1 0 0 0 1.414 1.414l.354-.354ZM13.5 8a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1ZM13.303 11.889a1 1 0 0 0-1.414 1.414l.354.354a1 1 0 0 0 1.414-1.414l-.354-.354ZM8 13.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1ZM4.111 13.303a1 1 0 1 0-1.414-1.414l-.354.354a1 1 0 1 0 1.414 1.414l.354-.354ZM0 8a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM3.757 2.343a1 1 0 1 0-1.414 1.414l.354.354A1 1 0 1 0 4.11 2.697l-.354-.354Z' />
              </svg>
            )}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Header
