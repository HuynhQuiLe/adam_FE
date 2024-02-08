import React from 'react'
import IOTD from './IOTD'
import Nominees from './Nominees'
import NewsAndUpdates from './NewsAndUpdates/NewsAndUpdates'

const Home = () => {
  return (
    <section className=''>
      <IOTD/>
      <NewsAndUpdates/>
      <Nominees/>
    </section>
  )
}

export default Home