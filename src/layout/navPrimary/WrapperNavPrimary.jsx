import React from 'react'
import NavPrimary from './NavPrimary'
import getData from '@/lib/getData'
const WrapperNavPrimary = async () => {

  const data = await getData('/wp-json/wp/v2/pages/725')
  const data_header = data?.acf?.header
  return <NavPrimary data_header={data_header} />
}

export default WrapperNavPrimary
