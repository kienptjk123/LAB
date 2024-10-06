import { Link } from 'react-router-dom'
import { useDarkMode } from '../../hooks/DarkModeContext'

function Footer() {
  const { isDarkMode } = useDarkMode()
  return (
    <footer
      className={` ${
        isDarkMode ? 'bg-custom-layout-dark text-white ' : 'bg-white'
      } text-gray-700 py-10 px-60 border-t border-gray-200`}
    >
      <div className='grid grid-cols-3 gap-8'>
        {/* Logo và mô tả */}
        <div>
          <h2 className='text-2xl font-semibold mb-3'>Orchids Shop</h2>
          <p className='text-lg'>
            Discover the beauty of orchids, where you can find the charm and elegance of nature.
          </p>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <Link to='/' className='hover:text-blue-500'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-blue-500'>
                About
              </Link>
            </li>
            <li>
              <Link to='/news' className='hover:text-blue-500'>
                News
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-blue-500'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 Khu Công Ng, Quận 9, TP.HCM
          </p>
          <p>
            <strong>Phone:</strong> +84 123 456 789
          </p>
          <p>
            <strong>Email:</strong> nguyentrungkien17@gmail.com
          </p>
        </div>
      </div>

      <div className='mt-8 border-t border-gray-300 pt-5 text-center'>
        <p className='text-gray-600'>&copy; 2024 Orchids Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
