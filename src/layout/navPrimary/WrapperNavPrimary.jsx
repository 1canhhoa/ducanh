import React from 'react'
import NavPrimary from './NavPrimary'
import getData from '@/lib/getData'
const WrapperNavPrimary = async () => {

  const data = await getData('/wp-json/acf/v3/header/1415')
  const data_header = data?.acf?.header
  return <NavPrimary data_header={data_header} />
}

export default WrapperNavPrimary
