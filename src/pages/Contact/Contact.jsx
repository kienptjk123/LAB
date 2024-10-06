import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useDarkMode } from '../../hooks/DarkModeContext'

function Contact() {
  const { isDarkMode } = useDarkMode()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us!')
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className=''>
      <Header />
      <div className={`${isDarkMode ? 'bg-custom-layout-dark text-white' : ''}mx-auto px-4 py-12`}>
        <div className={`text-center ${isDarkMode ? 'text-white' : ''} mb-10`}>
          <h1 className='text-4xl font-bold'>Contact Us</h1>
          <p className='text-lg '>We would love to hear from you! Please fill out the form below to get in touch.</p>
        </div>

        <div className='max-w-2xl mx-auto border border-gray-200 p-8 rounded-lg shadow-md'>
          {submitted ? (
            <div className='text-center'>
              <h2 className='text-2xl font-semibold text-green-600'>Thank you for your message!</h2>
              <p className='mt-2 text-lg '>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label htmlFor='name' className={`block text-lg ${isDarkMode ? 'text-white' : ''} font-semibold`}>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    isDarkMode ? 'bg-custom-layout-dark' : ''
                  } focus:ring-blue-500`}
                  placeholder='name'
                  required
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='email' className={`block text-lg ${isDarkMode ? 'text-white' : ''} font-semibold`}>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    isDarkMode ? 'bg-custom-layout-dark' : ''
                  } focus:ring-blue-500`}
                  placeholder='abcd@gmail.com'
                  required
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='message' className={`block text-lg ${isDarkMode ? 'text-white' : ''} font-semibold`}>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='6'
                  className={`mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    isDarkMode ? 'bg-custom-layout-dark' : ''
                  } focus:ring-blue-500`}
                  placeholder='Your message...'
                  required
                ></textarea>
              </div>

              <div className='text-center'>
                <button
                  type='submit'
                  className='w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition duration-300'
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
