import React from 'react'
import NavPrimary from './NavPrimary'
import getData1 from '@/lib/getData1'
const WrapperNavPrimary = async () => {

  const data = await getData1('/wp-json/wp/v2/pages/725')
  const data_header = data?.acf?.header
  return <NavPrimary data_header={data_header} />
}

export default WrapperNavPrimary
