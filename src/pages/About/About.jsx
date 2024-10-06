/* eslint-disable react/no-unescaped-entities */
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import '../../App.css'
import { useDarkMode } from '../../hooks/DarkModeContext'

function About() {
  const { isDarkMode } = useDarkMode()
  return (
    <div>
      <Header />
      <div className={`${isDarkMode ? 'bg-custom-layout-dark text-white' : ''} py-16 px-20`}>
        <div className='max-w-screen-lg mx-auto'>
          <h1 className='text-4xl font-extrabold text-center mb-12'>About Orchid Flowers</h1>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold  mb-6'>What Are Orchid Flowers?</h2>
            <p className='text-lg  leading-relaxed mb-6'>
              Orchids are one of the most diverse and widely distributed families of flowering plants in the world.
              Known for their exquisite beauty and unique shapes, orchids are a symbol of luxury, beauty, and strength.
              These stunning plants have been admired for centuries for their elegance and versatility. They are found
              in a wide range of colors, sizes, and patterns, making them highly sought after in gardens and floral
              arrangements.
            </p>
            <p className='text-lg  leading-relaxed mb-6'>
              Orchids belong to the family Orchidaceae, which includes about 25,000 species across more than 800 genera.
              They grow naturally in every part of the world except for Antarctica, from the coldest tundra to the
              hottest tropical jungles. The flowers of orchids are recognized for their three-part symmetry, often
              resembling intricate birds, insects, or even faces.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold  mb-6'>History of Orchids</h2>
            <p className='text-lg  leading-relaxed mb-6'>
              Orchids have been revered for thousands of years. In ancient Greece, orchids were believed to enhance
              fertility, and the roots of some species were used in medicine. The name "orchid" itself is derived from
              the Greek word "orchis," which means "testicle," referencing the shape of some orchid roots.
            </p>
            <p className='text-lg  leading-relaxed mb-6'>
              During the Victorian era, orchids became a status symbol, as wealthy individuals sought to cultivate rare
              species. This period, known as the "orchid mania," saw collectors paying vast sums for rare plants. Today,
              orchids are still a symbol of sophistication and elegance, and their presence is cherished in both private
              collections and public displays around the world.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold  mb-6'>Types of Orchids</h2>
            <p className='text-lg leading-relaxed mb-6'>
              Orchids come in a variety of species and hybrids, each with its unique characteristics. Some of the most
              popular types include:
            </p>
            <ul className='list-disc list-inside text-lg mb-6'>
              <li>
                <strong>Cattleya:</strong> Known as the "queen of orchids," Cattleyas are prized for their large,
                fragrant blooms.
              </li>
              <li>
                <strong>Dendrobium:</strong> Dendrobiums have slender stems with numerous smaller flowers that make them
                a favorite among collectors.
              </li>
              <li>
                <strong>Cymbidium:</strong> Cymbidiums are known for their long-lasting flowers and are often seen in
                bouquets and floral arrangements.
              </li>
              <li>
                <strong>Phalaenopsis:</strong> Also known as "moth orchids," Phalaenopsis are popular for their easy
                care and wide array of colors.
              </li>
              <li>
                <strong>Vanda:</strong> Vanda orchids are admired for their vibrant colors and are often seen in
                tropical regions.
              </li>
            </ul>
            <p className='text-lg leading-relaxed mb-6'>
              Orchids are extremely diverse and can grow as epiphytes (on trees), lithophytes (on rocks), or even as
              terrestrial plants. Each type of orchid has unique requirements for light, water, and temperature, but
              with proper care, orchids can bloom beautifully year after year.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6'>Caring for Orchids</h2>
            <p className='text-lg  leading-relaxed mb-6'>
              Orchids are relatively easy to care for, but they do require some specific conditions to thrive. Here are
              some essential care tips to help you keep your orchids healthy and blooming:
            </p>
            <ul className='list-disc list-inside text-lg mb-6'>
              <li>
                <strong>Light:</strong> Orchids prefer bright, indirect light. A windowsill with filtered light is ideal
                for most types of orchids.
              </li>
              <li>
                <strong>Watering:</strong> Orchids should be watered once a week, but the soil should be allowed to dry
                out between waterings to avoid root rot.
              </li>
              <li>
                <strong>Temperature:</strong> Most orchids thrive in temperatures between 65°F and 85°F during the day,
                with cooler nights around 50°F to 60°F.
              </li>
              <li>
                <strong>Humidity:</strong> Orchids prefer high humidity levels, so placing a humidifier nearby or using
                a pebble tray with water can be helpful.
              </li>
              <li>
                <strong>Fertilization:</strong> Orchids need to be fertilized every 2-3 weeks during the growing season
                with a balanced orchid fertilizer.
              </li>
            </ul>
            <p className='text-lg  leading-relaxed mb-6'>
              With the right care, orchids can bloom for months, providing beauty and color to your home. They are
              perfect for both beginners and experienced gardeners, offering a rewarding experience for anyone who loves
              plants.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold  mb-6'>Why Choose Orchid Flowers?</h2>
            <p className='text-lg  leading-relaxed mb-6'>
              Orchids are not only a visual delight, but they also hold cultural and symbolic meanings. They are
              associated with love, beauty, strength, and luxury across many cultures. Orchids make perfect gifts for
              special occasions such as weddings, birthdays, and anniversaries.
            </p>
            <p className='text-lg  leading-relaxed mb-6'>
              Additionally, orchids are a low-maintenance plant compared to other houseplants, and their stunning
              blossoms can last for weeks or even months with the right care. Whether you are a flower enthusiast or
              someone looking to brighten up your living space, orchids are a beautiful and lasting addition to any
              collection.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
