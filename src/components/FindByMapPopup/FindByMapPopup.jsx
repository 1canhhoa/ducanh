'use client'
import Image from 'next/image'
import {useLayoutEffect, useState} from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import {Button} from '../ui/button'
import Link from 'next/link'
import {FAKE_COUNTRIES, headquarter} from './fakeData'

const CHECK_BOXS = [
  {
    label: 'Du học cấp 3',
    value: 'cap_3',
  },
  {
    label: 'Du học đại học',
    value: 'dh',
  },
  {
    label: 'Du học sau đại học',
    value: 'sdh',
  },
]

const FindByMapPopup = ({lang, closeCallback, isMobile = false}) => {
  const [country, setCountry] = useState({
    country: '',
    name: '',
  })
  const [state, setState] = useState({
    name: '',
  })

  const [activeSelect, setActiveSelect] = useState({
    id: '',
    enabled: false,
  })

  const [polygons, setPolygons] = useState(null)
  const [rootEl, setRootEl] = useState(null)
  const [prevSelectedPolygons, setPrevSelectedPolygons] = useState([])
  const [pinSchoolSeries, setPinSchoolSeries] = useState([])
  const [headquarterSeries, setHeadquarterSeries] = useState([])

  const clearMarkers = () => {
    // clear all marker existed in map
    headquarterSeries.bulletsContainer?.children.clear()
    headquarterSeries.bullets?.clear()
    pinSchoolSeries.bulletsContainer?.children.clear()
    pinSchoolSeries.bullets?.clear()
    headquarterSeries.data?.setAll([])
    pinSchoolSeries.data?.setAll([])
  }
  function hightlightArea(countryid = 'VN') {
    // clear all markers in map
    clearMarkers()
    // polygons?.zoomToDataItem(polygons?.getDataItemById(countryid))
    // reinit marker of specific area
    if (countryid === headquarter.country) {
      headquarterSeries.pushDataItem(headquarter.coordinates)
      headquarterSeries.bullets?.push(function () {
        return am5.Bullet.new(rootEl, {
          sprite: am5.Picture.new(rootEl, {
            width: 27,
            height: 37,
            x: am5.percent(0),
            y: am5.percent(50),
            centerX: am5.percent(50),
            centerY: am5.percent(90),
            src: '/images/primary/headquarter.png',
          }),
        })
      })
    } else {
      const specificCountry = FAKE_COUNTRIES.find(
        (country) => country.country === countryid,
      )
      specificCountry?.coordinates?.forEach((coordinate) => {
        pinSchoolSeries.pushDataItem(coordinate)
      })
      pinSchoolSeries.bullets?.push(function () {
        return am5.Bullet.new(rootEl, {
          sprite: am5.Picture.new(rootEl, {
            width: 19.5,
            height: 27,
            x: am5.percent(0),
            y: am5.percent(50),
            centerX: am5.percent(50),
            centerY: am5.percent(90),
            src: '/images/primary/pin_school.svg',
          }),
        })
      })
    }

    // change bg of specific area
    prevSelectedPolygons.forEach((mapPolygon) => {
      mapPolygon.set('fill', '#FFF')
    })
    setPrevSelectedPolygons([])
    if (countryid || countryid !== '') {
      let polygon = polygons?.getDataItemById(countryid)?.get('mapPolygon')
      if (countryid === 'VN') {
        polygon?.set('fill', '#ED4343')
      } else polygon?.set('fill', '#4E91F7')
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
    setRootEl(root)
    root.setThemes([am5themes_Animated.new(root)])
    let chart = root.container.children.push(
      // allow zoom/pan x/pan y
      am5map.MapChart.new(root, {
        // panX: 'none',
        // panY: 'none',
        // maxZoomLevel: 1,
      }),
    )

    // Set map definition
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
      }),
    )

    // Create series
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{id} - {name}',
      fill: am5.color('#fff'),
      stroke: am5.color('#000'),
      strokeWidth: 0.5,
      strokeOpacity: 0.2,
      interactive: true,
      templateField: 'polygonSettings',
    })

    // add label for countries
    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        polygonIdField: 'country',
      }),
    )
    pointSeries.data.setAll(
      FAKE_COUNTRIES.filter((country) => country.country !== 'AU'),
    )
    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          text: '{name}',
          populateText: true,
          fontSize: '0.5rem',
        }),
      })
    })

    let AustraliaSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        polygonIdField: 'country',
      }),
    )
    AustraliaSeries.data.setAll([
      {
        country: 'AU',
        name: 'Australia',
      },
    ])
    AustraliaSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          text: '{name}',
          populateText: true,
          fontSize: isMobile ? '0.5rem' : "'1rem'",
          fill: '#fff',
        }),
      })
    })

    let markerHeadquarterSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {}),
    )
    let markerPinSchoolSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        polygonIdField: 'country',
      }),
    )

    setHeadquarterSeries(markerHeadquarterSeries)
    setPinSchoolSeries(markerPinSchoolSeries)

    // const countries = [];
    // am5geodata_worldLow.features.forEach(place => {
    //     if (!place.properties.name.includes("Islands")) {
    //         countries.push(
    //             { country: place?.properties?.id, name: place?.properties?.name }
    //         )
    //     }
    // })
    // console.log(am5geodata_worldLow.features)

    // hightlight immediately on firstload
    // polygonSeries.data.setAll(
    //   FAKE_COUNTRIES.map((country) => {
    //     return {
    //       id: country.country,
    //       polygonSettings: {
    //         fill:
    //           country.country !== headquarter.country ? '#4E91F7' : '#ED4343',
    //       },
    //     }
    //   }),
    // )

    // polygonSeries.mapPolygons.template.states.create('hover', {
    //   fill: am5.color('#abcdef'),
    // })

    // handle click on area
    // let prevMapPolygons = []
    polygonSeries.mapPolygons.template.events.on('wheel', (ev) => {
      const dataItem = ev.target.dataItem
      console.log({dataItem})
    })
    polygonSeries.mapPolygons.template.events.on('click', (ev) => {
      markerPinSchoolSeries.data.setAll([])
      const dataItem = ev.target.dataItem
      // console.log(dataItem.get('geometry'))
      // prevSelectedPolygons.forEach((mapPolygon) => {
      //   mapPolygon.set('fill', '#FFF')
      // })
      // prevMapPolygons.forEach((mapPolygon) => {
      //   mapPolygon.set('fill', '#FFF')
      // })
      // setPrevSelectedPolygons([])
      // prevMapPolygons = []
      // const polygon = dataItem.get('mapPolygon')
      // polygon.set('fill', '#4E91F7')
      // const tempPrevPolygons = []
      // prevMapPolygons.push(polygon)
      // tempPrevPolygons.push(polygon)
      // setPrevSelectedPolygons(tempPrevPolygons)
      if (dataItem) {
        polygonSeries.zoomToDataItem(dataItem)
        const coordinates = dataItem.get('geometry')?.coordinates
        coordinates.forEach((coordinate) => {
          coordinate.forEach((c, index) => {
            if (index === 0) {
              c.forEach((lastC, lastIndex) => {
                if (lastIndex === 0) {
                  // console.log(lastC, index)
                  markerPinSchoolSeries.pushDataItem({
                    longitude: lastC[0],
                    latitude: lastC[1],
                  })
                  return
                }
              })
              return
            }
          })
        })
        // console.log(markerPinSchoolSeries)
        markerPinSchoolSeries.bullets?.push(function () {
          return am5.Bullet.new(root, {
            sprite: am5.Picture.new(root, {
              width: 19.5,
              height: 27,
              x: am5.percent(0),
              y: am5.percent(50),
              centerX: am5.percent(50),
              centerY: am5.percent(90),
              src: '/images/primary/pin_school.svg',
            }),
          })
        })
      }
    })

    setPolygons(polygonSeries)

    return () => {
      root.dispose()
    }
  }, [])

  // hightlight country when select change
  useLayoutEffect(() => {
    hightlightArea(country.country)
  }, [country])
  return (
    <div className='fixed flex xmd:flex-col-reverse items-center top-0 left-0 w-full h-full bg-[#C1DEF9] z-[9999]'>
      <header
        className='absolute top-0 left-0 w-full flex bg-white md:bg-transparent 
      xmd:py-[0.8rem] xmd:px-[0.625rem] z-[10000]'
      >
        <Link
          href={'/'}
          className='md:hidden w-[6.7rem] h-[1.875rem]'
        >
          <Image
            src={'/images/primary/Logo.svg'}
            alt={'close-map-popup'}
            width={100}
            height={100}
            className={'size-full'}
            priority
          />
        </Link>
        <button
          onClick={closeCallback}
          className='ml-auto rounded-lg flex items-center justify-center 
        md:bg-white md:p-[0.625rem] md:mr-[1.4rem] md:mt-[1.4rem]'
        >
          <picture>
            <source
              srcSet='/images/primary/Close_MD.svg'
              media='(max-width:767px)'
            />
            <Image
              src={'/images/primary/Close_LG.svg'}
              alt={'close-map-popup'}
              width={100}
              height={100}
              className={'size-[1.5rem]'}
              priority
            />
          </picture>
        </button>
      </header>
      <form
        action=''
        className='bg-white w-[calc(100%-0.75rem*2)] xmd:mb-[0.75rem] md:w-[24rem] md:ml-[2.87rem] rounded-[1rem] p-[1.5rem] xmd:h-[13rem]'
      >
        {/* title */}
        <h2 className='text-primary-60 font-bold text-[1.5rem] leading-[120%]'>
          <div
            className=''
            dangerouslySetInnerHTML={{__html: lang.map.find_school}}
          ></div>
        </h2>
        {/* input tìm trường */}
        <div className='mt-[2rem] mb-[0.7rem] rounded-lg border border-primary-40 flex h-[3rem] p-[0.625rem_1rem] items-center'>
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={
              'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem] xmd:hidden'
            }
            priority
          />
          <input
            type='text'
            name='school_name'
            placeholder='Tìm tên trường...'
            className='placeholder:text-greyscaletext-30 font-bold text-[0.875rem] leading-[100%] tracking-[0.013rem] uppercase'
          />
        </div>
        <span className='text-greyscaletext-40 text-[0.875rem] font-normal leading-[120%] block'>
          Harvard, Cambridge, Stanford,...
        </span>
        {/* custom select quốc gia*/}
        <div className='mt-[2rem] select-none cursor-pointer mb-[0.7rem] relative rounded-lg border border-primary-40 flex h-[3rem] p-[0.625rem_1rem] items-center'>
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={
              'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem] xmd:hidden'
            }
            priority
          />
          <label
            onClick={() => handleToggleSelect('country')}
            className='text-primary-50 font-bold text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase absolute top-0 left-[3.12rem]
             flex items-center bg-white w-[calc(100%-3.12rem*2)] h-full'
          >
            {country.name ? (
              country.name
            ) : (
              <>
                {lang.map.select_country}{' '}
                <span className='text-secondary-50'>*</span>
              </>
            )}
          </label>
          {activeSelect.id === 'country' && activeSelect.enabled && (
            <div
              className='absolute w-full left-0 top-[calc(100%+0.5rem)] bg-white py-[0.5rem] z-10 shadow-lg rounded-b-lg
            h-max max-h-[10rem] overflow-y-auto'
            >
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

        {/* custom select chọn bang/tỉnh */}
        <div className='mt-[1.5rem] select-none cursor-pointer mb-[0.7rem] relative rounded-lg border border-primary-40 flex h-[3rem] p-[0.625rem_1rem] items-center'>
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={
              'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem] xmd:hidden'
            }
            priority
          />
          <label
            onClick={() => handleToggleSelect('state_province')}
            className='text-primary-50 font-bold text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase 
            absolute top-0 left-[3.12rem] flex items-center bg-white w-[calc(100%-3.12rem*2)] h-full'
          >
            {state.name ? state.name : lang.map.select_state_province}
          </label>
          {activeSelect.id === 'state_province' && activeSelect.enabled && (
            <div
              className='absolute w-full left-0 top-[calc(100%+0.5rem)] bg-white py-[0.5rem] z-10 shadow-lg rounded-b-lg
            h-max max-h-[10rem] overflow-y-auto'
            >
              {FAKE_COUNTRIES?.find(
                (c) => country.country === c.country,
              ).states?.map((state) => (
                <div
                  key={state.name}
                  className='p-[0.5rem_1rem] hover:bg-greyscaletext-10 duration-150 text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase'
                  onClick={() => setState(state)}
                >
                  {state.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* checkbox */}
        <h3 className='mt-[2.25rem] text-primary-50 text-[0.875rem] font-bold leading-[120%] mb-[1rem]'>
          {lang.map.select_title}
        </h3>
        {CHECK_BOXS.map((checkbox) => (
          <div
            className='flex items-center mb-[0.6rem] last:mb-0'
            key={checkbox.value}
          >
            <input
              type='checkbox'
              name={checkbox.value}
              id={checkbox.value}
              className='size-[1.5rem] accent-primary-40 relative outline-none border-none
             after:absolute after:content-[""] after:size-[99%] after:bg-transparent
            after:rounded-[0.1875rem] after:border after:border-primary-40'
            />
            <label
              htmlFor={checkbox.value}
              className='ml-[1rem]'
            >
              {checkbox.label}
            </label>
          </div>
        ))}

        {/* button tìm kiếm */}
        <Button
          onClick={(e) => {
            e.preventDefault()
          }}
          className='uppercase w-full bg-primary-50 text-white mt-[2rem]'
        >
          {' '}
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={'w-[1.25rem] h-[1.25rem] object-cover'}
            priority
          />
          <span className='inline-block mx-[0.62rem]'>{lang.map.search}</span>
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={'w-[1.25rem] h-[1.25rem] object-cover'}
            priority
          />
        </Button>
      </form>
      {/* render world map */}
      <div
        id='chartdiv'
        className='w-[60rem] xmd:w-full h-[40rem] bg-[#C1DEF9] ml-auto mr-[4rem] relative'
      >
        {/* cover lib watermark */}
        <div className='w-[5rem] h-[2rem] absolute left-0 bottom-0 bg-[#C1DEF9] z-10'></div>
      </div>
    </div>
  )
}

export default FindByMapPopup
