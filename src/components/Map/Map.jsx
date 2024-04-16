'use client'
import Image from 'next/image'
import {useLayoutEffect, useState} from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import './Map.css'

const FAKE_COUNTRIES = [
  {
    country: 'VN',
    name: 'Vietnam',
  },
  {
    country: 'IR',
    name: 'Iran',
  },
  {
    country: 'IQ',
    name: 'Iraq',
  },
  {
    country: 'AE',
    name: 'UAE',
  },
]

const Map = ({lang}) => {
  const [country, setCountry] = useState({
    country: '',
    name: '',
  })

  const [activeSelect, setActiveSelect] = useState({
    id: '',
    enabled: false,
  })

  const [polygons, setPolygons] = useState(null)
  const [prevSelectedPolygons, setPrevSelectedPolygons] = useState([])

  function hightlightArea(countryid = 'VN') {
    // console.log("trigger oninput")
    prevSelectedPolygons.forEach((mapPolygon) => {
      mapPolygon.set('fill', '#FFF')
    })
    setPrevSelectedPolygons([])
    if (countryid || countryid !== '') {
      let polygon = polygons?.getDataItemById(countryid)?.get('mapPolygon')
      polygon?.set('fill', '#4E91F7')
      const tempPolygons = []
      tempPolygons.push(polygon)
      setPrevSelectedPolygons(tempPolygons)
    }
  }

  const handleToggleSelect = (id) => {
    setActiveSelect((prevState) => {
      return {
        id,
        enabled: id !== prevState.id ? true : !prevState.enabled,
      }
    })
  }
  const handleCountrySelect = (countryObj) => {
    setCountry(countryObj)
    setActiveSelect('')
  }

  useLayoutEffect(() => {
    let root = am5.Root.new('chartdiv')
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'none',
        panY: 'none',
        maxZoomLevel: 1,
      }),
    )

    // Set map definition
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
      }),
    )
    setPolygons(polygonSeries)
    // const countries = [];
    // am5geodata_worldLow.features.forEach(place => {
    //     if (!place.properties.name.includes("Islands")) {
    //         countries.push(
    //             { country: place?.properties?.id, name: place?.properties?.name }
    //         )
    //     }
    // })
    // console.log(am5geodata_worldLow.features)
    // let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));

    // Create series
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{id} - {name}',
      fill: am5.color('#fff'),
      stroke: am5.color('#000'),
      strokeWidth: 0.5,
      strokeOpacity: 0.2,
      interactive: true,
    })

    // let prevMapPolygons = []
    // polygonSeries.mapPolygons.template.events.on('click', (ev) => {
    //   const dataItem = ev.target.dataItem
    //   prevSelectedPolygons.forEach((mapPolygon) => {
    //     mapPolygon.set('fill', '#FFF')
    //   })
    //   prevMapPolygons.forEach((mapPolygon) => {
    //     mapPolygon.set('fill', '#FFF')
    //   })
    //   setPrevSelectedPolygons([])
    //   prevMapPolygons = []
    //   const polygon = dataItem.get('mapPolygon')
    //   polygon.set('fill', '#4E91F7')
    //   const tempPrevPolygons = []
    //   prevMapPolygons.push(polygon)
    //   tempPrevPolygons.push(polygon)
    //   setPrevSelectedPolygons(tempPrevPolygons)
    // })

    // add label for countries
    // Create point series
    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        polygonIdField: 'country',
      }),
    )

    pointSeries.data.setAll(FAKE_COUNTRIES)

    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          text: '{name}',
          populateText: true,
          fontSize: '0.4rem',
        }),
      })
    })

    return () => {
      root.dispose()
    }
  }, [])
  useLayoutEffect(() => {
    hightlightArea(country.country)
  }, [country])
  return (
    <div className='fixed flex items-center top-0 left-0 w-full h-full bg-[#C1DEF9] z-[9999]'>
      <form
        action=''
        className='bg-white w-[24rem] ml-[2.87rem] rounded-[1rem] p-[1.5rem]'
      >
        <h2 className='text-primary-60 font-bold text-[1.5rem] leading-[120%]'>
          <div
            className=''
            dangerouslySetInnerHTML={{__html: lang.map.find_school}}
          ></div>
          <div className='mt-[2rem] mb-[0.7rem] rounded-lg border border-primary-40 flex h-[3rem] p-[0.625rem_1rem] items-center'>
            <Image
              src={'/images/primary/AlignBottom_color.svg'}
              alt={'duc-anh'}
              width={100}
              height={100}
              className={'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem]'}
              priority
            />
            <input
              type='text'
              name='school_name'
              placeholder='Tìm tên trường...'
              className='placeholder:text-greyscaletext-30 font-bold text-[0.875rem] leading-[100%] tracking-[0.013rem] uppercase'
            />
          </div>
          <span className='text-greyscaletext-40 text-[0.875rem] font-normal leading-[120%] mt-[1.5rem] block'>
            Harvard, Cambridge, Stanford,...
          </span>
          {/* custom select */}
          <div className='mt-[2rem] cursor-pointer mb-[0.7rem] relative rounded-lg border border-primary-40 flex h-[3rem] p-[0.625rem_1rem] items-center'>
            <Image
              src={'/images/primary/AlignBottom_color.svg'}
              alt={'duc-anh'}
              width={100}
              height={100}
              className={'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem]'}
              priority
            />
            <label
              onClick={() => handleToggleSelect('country')}
              className='font-bold text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase absolute top-0 left-[3.12rem] flex items-center bg-white w-[calc(100%-3.12rem*2)] h-full'
            >
              {country.name ? (
                country.name
              ) : (
                <>
                  Chọn quốc gia <span className='text-secondary-50'>*</span>
                </>
              )}
            </label>
            {activeSelect.id === 'country' && activeSelect.enabled && (
              <div className='absolute w-full left-0 top-[calc(100%+0.5rem)] bg-white py-[0.5rem]'>
                {FAKE_COUNTRIES.map((country) => (
                  <div
                    key={country.country}
                    className='p-[0.5rem_1rem] hover:bg-greyscaletext-10 duration-150 text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase'
                    onClick={() => handleCountrySelect(country)}
                  >
                    {country.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </h2>
      </form>
      <div
        id='chartdiv'
        className='w-[52.4rem] h-[31rem] bg-[#C1DEF9] ml-auto mr-[10.8rem] relative'
      >
        <div className='w-[10rem] h-[10rem] absolute left-0 bottom-0 bg-[#C1DEF9] z-10'></div>
      </div>
    </div>
  )
}

export default Map
