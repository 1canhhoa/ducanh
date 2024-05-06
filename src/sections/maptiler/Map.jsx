"use client"

import React, { useState, useEffect, useRef } from 'react'
import {
  Marker,
  TileLayer,
  LayersControl,
  useMapEvents,
  MapContainer,
  Popup
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import SingleCountry from './SingleCountry'
import World from './World'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import mapData from '@/lib/json/world1.json'
import 'react-leaflet-markercluster/dist/styles.min.css'
import MarkerComponent from './MarkerComponent'
import DisplayPosition from './DisplayPosition'
import usa from '@/lib/json/usa.json'
import utdkingdom from "@/lib/json/utdkingdom.json"
import marker_demo_search from "@/lib/json/marker_demo_search.json"
import aus from "@/lib/json/aus.json"
import Button from './Button'
import { GeoJSON } from "react-leaflet";
import Head from 'next/head';

const arrayGeoCountry = [
  { title: 'vietnam', geojs: usa },
  {
    title: 'United States',
    geojs: usa,
    states: ['Massachusetts', 'Michigan', 'NorthCarolina', 'Ohio', 'Pennsylvania', 'Tennessee', 'Texas', 'Utah', 'Washington', 'Maryland'],
    center: [52, -140], zoom: 3
  },
  {
    title: 'United Kingdom', geojs: utdkingdom, states: ['NorthernIreland', 'Scotland', 'Wales', 'ENGLAND'],
    center: [
      54.876991244772285,
      -8.700339497225627
    ], zoom: 5
  },
  {
    title: 'australia', geojs: aus, states: ['AshmoreandCartierIslands', 'AustralianCapitalTerritory', 'CoralSeaIslandsTerritory', 'JervisBayTerritory', 'NewSouthWales', 'NorthernTerritory', 'Queensland'],
    center: [-23.7, 120], zoom: 4
  },
  // { title: 'south Korea', geojs: utdkingdom },
  // { title: 'azerbaijan', geojs: usa },
  // { title: 'japan', geojs: utdkingdom },
  // { title: 'chile', geojs: usa },
  // { title: 'china', geojs: utdkingdom },
  // { title: 'belarus', geojs: usa },
  // { title: 'russia', geojs: utdkingdom },
]


const Map = ({ isMobile }) => {
  const [map, setMap] = useState(null)
  const [currentCountry, setCurrentCountry] = useState({})
  const [myPosition, setMyPosition] = useState([21.01752649249157, 105.89865607500519])
  const [myWorld, setMyWorld] = useState(isMobile ? [13, 19] : [45, -65])
  const infoRef = useRef()


  const [selectFeature, setSelectFeature] = useState('')
  const [selectState, setSelectState] = useState('')

  // kết quả khi select vào country và state
  const [searchResultsState, setSearchResultsState] = useState([])
  const [searchResults, setSearchResults] = useState([]);



  const [accordionOpen, setAccordionOpen] = useState(false)
  const [checkedId, setCheckedId] = useState(null);

  const handleCheckboxChange = (id) => {
    if (checkedId === id) {
      setCheckedId(-1);
    } else {
      setCheckedId(id);
    }
  };


  useEffect(() => {
    const current = arrayGeoCountry?.find((f) => f?.title === selectFeature)
    console.log({ current });
    setCurrentCountry(current)
  }, [selectFeature])


  const handleSelectFeture = (d) => {
    setSelectFeature(d)
    const results = mapData.features.find((feature) =>
      feature.properties.name.toLowerCase().includes(d.toLowerCase()),
    )
    setSearchResults(results)
  }
  const handleSelectState = (d) => {
    setSelectState(d)
    const results = currentCountry?.geojs?.features.find((feature) =>
      feature.properties.NAME_1.toLowerCase().includes(d.toLowerCase()),
    )
    setSearchResultsState(results)
  }
  const [isMapGeojson, setIsMapGeojson] = useState(true)
  const eventHandlers = {
    add: (e) => {
      setIsMapGeojson(false)
    },
    remove: (e) => {
      // console.log("Removed layer:", e.target);
    },
  }
  const eventHandlers2 = {
    add: (e) => {
      setIsMapGeojson(true)
    },
    remove: (e) => {
      // setIsMapGeojson(false)
    },
  }

  const myIcon = L.icon({
    Draggable: true,
    iconUrl: './images/aside/trụ sở.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })
  const [zoomLevel, setZoomLevel] = useState(isMobile ? 1 : 2) // initial zoom level provided for MapContainer
  function OnZoom() {
    const mapEvents = useMapEvents({
      zoomend: () => {
        setZoomLevel(mapEvents.getZoom())
      },
    })

    return null
  }


  // thanh search

  const [listPlace, setListPlace] = useState(["Harvard", "Oxford", 'campbrige'])
  const [searchText, setSearchText] = useState('')
  const [searchTextResults, setSearchTextResults] = useState(marker_demo_search?.features);
  const [positionSearch, setPositionSearch] = useState([])

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);

    // Filter the data based on the search term
    const results = marker_demo_search?.features?.filter(feature =>
      feature.properties.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchTextResults(results);
  };
  const handleClickRsSearch = (d) => {
    setPositionSearch([d[1], d[0]])
    setSearchTextResults([])
    setSearchText('')
  }

  console.log({ positionSearch })
  return (
    <div className='touch-manipulation relative flex flex-row w-screen md:w-[100rem] md:h-[100vh] md:rounded-3xl'>
      <Head>
        {/* Thẻ meta để vô hiệu hóa pinch zoom */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <div className='map w-full md:h-[100vh] md:rounded-3xl'>
        {map && <DisplayPosition zoomLevel={zoomLevel} map={map} />}
        <MapContainer
          ref={setMap}
          className=' md:h-full z-[400] ml-auto md:rounded-3xl'
          scrollWheelZoom={true}
          center={myWorld}
          // center={{ lat: 55.505, lng: 55.09 }}
          zoom={isMobile ? 1 : 2}
          minZoom={isMobile ? 1 : 2}
          maxZoom={18}
          zoomControl={false}
        >

          {currentCountry?.title && (
            <SingleCountry
              zoom={currentCountry?.zoom}
              center={currentCountry?.center}
              title={currentCountry?.title}
              geojs={currentCountry?.geojs}
              setSearchResultsState={setSearchResultsState}
              searchResultsState={searchResultsState}
              zoomLevel={zoomLevel}
            />
          )}
          <Marker offset={[0, 40]} position={myPosition} icon={myIcon}></Marker>
          <OnZoom />
          <World
            isMobile={isMobile}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            zoomLevel={zoomLevel}
            isMapGeojson={isMapGeojson}
            infoRef={infoRef}
          />

          <LayersControl position='bottomright'>
            <LayersControl.BaseLayer
              checked={zoomLevel > 4 ? false : true}
              name='map ko có gì'
            >
              <TileLayer
                eventHandlers={eventHandlers2}
                url='kkkdkd'
                attribution='map'
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer
              checked={zoomLevel > 4 ? true : false}
              name='CartoDB.VoyagerLabelsUnder'>
              <TileLayer
                eventHandlers={eventHandlers}
                noWrap={true}
                url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='CartoDB.Positron'>
              <TileLayer
                eventHandlers={eventHandlers}
                noWrap={true}
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
                subdomains='abcd'
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer
              name='map mặc định '
            >
              <TileLayer
                eventHandlers={eventHandlers}
                subdomains='abcd'
                noWrap={true}
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=f0ta3kATgKEx8KWw477L'
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name='OpenStreetMap.BZH'>
              <TileLayer
                eventHandlers={eventHandlers}
                noWrap={true}
                url='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='OpenStreetMap.Mapnik'>
              <TileLayer
                eventHandlers={eventHandlers}
                noWrap={true}
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='Stamen.Toner'>
              <TileLayer
                eventHandlers={eventHandlers}
                noWrap={true}
                url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}'
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
                subdomains='abcd'
                ext='png'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='Stadia.AlidadeSmooth'>
              <TileLayer
                eventHandlers={eventHandlers}
                noWrap={true}
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='Stadia.AlidadeSmoothDark'>
              <TileLayer
                eventHandlers={eventHandlers}
                noWrap={true}
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          {(zoomLevel > 4 || positionSearch) && <MarkerComponent
            positionSearch={positionSearch}
            checkedId={checkedId}
          />}

        </MapContainer>
      </div>

      <div className='z-[401] fixed md:-translate-y-1/2 md:top-1/2 md:left-[3rem] xmd:left-0 xmd:right-0 xmd:bottom-[0.75rem] xmd:mx-[0.75rem] flex md:w-[24.3125rem] bg-white flex-col justify-center items-start 
      gap-8 xmd:gap-2 p-6 rounded-2xl'>
        <div className='w-[15.3125rem] text-[color:var(--PRIMARY-60,#132B7D)] text-2xl not-italic font-bold leading-[120%]'>
          Tìm trường cùng Đức Anh Educonnect
        </div>

        <div onClick={() => setAccordionOpen(!accordionOpen)} className={'md:hidden flex group rounded-full justify-between items-center '}>
          <svg className='size-[1.25rem] absolute right-[1.5rem] top-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M4.1665 13.8333L9.99984 8L15.8332 13.8333" stroke="#2B46A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <div className=' flex flex-col items-start gap-9 self-stretch'>
          {/* SEARCH AND SELECT */}
          <div className='flex flex-col items-start gap-6 self-stretch'>
            <div className='flex relative flex-col items-start gap-[0.6875rem] self-stretch'>
              <div className={'flex h-[2.9375rem] items-center gap-2.5 self-stretch border border-[color:var(--PRIMARY-40,#3468CD)] px-4 py-2.5 rounded-lg border-solid'}>
                <input
                  value={searchText}
                  onChange={handleSearchChange}
                  className={
                    'xmd:pl-[0rem] pl-[2rem] !border-red-500 text-[#2B46A8] placeholder:uppercase placeholder:text-[#828282] text-sm not-italic font-bold leading-[100%] tracking-[0.01313rem]'
                  }
                  placeholder='Tìm tên trường...'
                />
              </div>
              <div className='flex  text-[color:var(--greyscaletext-40,#6A6A6A)] text-sm not-italic font-normal leading-[120%]'>
                {listPlace?.map((d, i) => (
                  <div
                    key={i}
                  >
                    {d},
                  </div>
                ))}...
              </div>
              {searchText && searchTextResults.length > 0 && <div className="absolute z-[2000] flex-col top-[3.3rem] w-full bg-white
               flex justify-center items-start 
                 rounded-lg border border-[#3468CD] overflow-hidden shadow-2xl
              ">
                {searchTextResults?.map((d, i) => (
                  <div
                    onClick={() => handleClickRsSearch(d?.geometry?.coordinates)}
                    key={i} className="cursor-pointer w-full text-[0.875rem] font-semibold pl-[2rem] hover:bg-primary-10 py-[0.5rem]">
                    {d?.properties?.name}
                  </div>
                ))}

              </div>}
            </div>

            {/*SELECT*/}

            <div
              className={`xmd:hidden  grid overflow-hidden w-full transition-all duration-[4000ms] ease-in-out text-slate-600 text-sm 
                       ${accordionOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "xmd:grid-rows-[0fr] xmd:opacity-0"
                }`}
            >
              <div className="overflow-hidden ">
                <div className='flex relative  w-full flex-col items-start gap-6 self-stretch'>
                  <DropdownMenu className=''>
                    <DropdownMenuTrigger asChild>
                      <div
                        className={
                          'flex h-[2.9375rem] items-center gap-2.5 self-stretch border border-[color:var(--PRIMARY-40,#3468CD)] px-4 py-[0.75rem] rounded-lg border-solid'
                        }
                      >
                        <input
                          className={
                            'pl-[2rem] text-[#2B46A8] placeholder:text-[#2B46A8] text-sm not-italic font-bold leading-[100%] tracking-[0.01313rem] uppercase'
                          }
                          placeholder={
                            selectFeature ? selectFeature : 'CHỌN QUỐC GIA*'
                          }
                        />
                      </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className='!p-0 !z-[402] !w-[21.2125rem]'>
                      <DropdownMenuGroup className='bg-white '>
                        {arrayGeoCountry?.map((d, index) => (
                          <DropdownMenuItem
                            onClick={() => handleSelectFeture(d?.title)}
                            key={index}
                            className={
                              ' !py-0 group  cursor-pointer ' +
                              (selectFeature === d?.title
                                ? 'bg-primary-10'
                                : 'hover:bg-primary-10')
                            }
                          >
                            <div className='z-[10001] flex justify-start items-start space-x-[0.75rem]  py-[0.625rem] px-[0.75rem] pr-[6rem]'>

                              <div className='text-primary-50 font-feature-settings text-center text-[0.875rrem] font-semibold'>
                                {d?.title}
                              </div>

                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu className=''>
                    <DropdownMenuTrigger
                      className={
                        ' ' +
                        (selectFeature
                          ? ''
                          : 'cursor-not-allowed pointer-events-none')
                      }
                      asChild
                    >
                      <div
                        className={
                          'flex h-[2.9375rem] items-center gap-2.5 self-stretch border border-[color:var(--PRIMARY-40,#3468CD)] px-4 py-[0.75rem] rounded-lg border-solid'
                        }
                      >
                        <input
                          className={
                            'pl-[2rem] text-[#2B46A8] placeholder:text-[#2B46A8] text-sm not-italic font-bold leading-[100%] tracking-[0.01313rem] uppercase '
                          }
                          placeholder={selectState ? selectState : 'Chọn bang/tỉnh'}
                        />
                      </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className='!p-0 !z-[402] !w-[21.2125rem]'>
                      <DropdownMenuGroup className='bg-white max-h-[15rem] overflow-y-scroll '>
                        {currentCountry?.geojs?.features?.map((d, index) => (
                          <DropdownMenuItem
                            onClick={() => handleSelectState(d?.properties?.NAME_1)}
                            key={index}
                            className={
                              ' !py-0 group  cursor-pointer ' +
                              (index === 0
                                ? 'bg-primary-10'
                                : 'hover:bg-primary-10')
                            }
                          >
                            <div className='z-[1001] flex justify-start items-start space-x-[0.75rem]  py-[0.625rem] px-[0.75rem] pr-[6rem]'>

                              <div className='text-primary-50 font-feature-settings text-center text-[0.875rrem] font-semibold'>
                                {d?.properties?.NAME_1}
                              </div>

                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>


          {/* CHECKED  */}
          <div
            className={`xmd:hidden grid overflow-hidden w-full transition-all duration-[4000ms] ease-in-out text-slate-600 text-sm 
                    ${accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "xmd:grid-rows-[0fr] xmd:opacity-0"
              }`}
          >
            <div className="overflow-hidden">
              <div className='flex flex-col items-start gap-[1rem] self-stretch'>
                <div className='text-[color:var(--PRIMARY-50,var(--Xanh,#2B46A8))] text-sm not-italic font-bold leading-[120%]'>
                  Lựa chọn bậc học
                </div>
                <div className='flex flex-col items-start gap-[0.5625rem]'>
                  <div className='flex items-center gap-4'>
                    <input
                      className='size-[1.5rem] bg-red-600 border-[1px] border-blue-400 '
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                      // checked={checked1}
                      // onChange={(event) => handleCheckboxChange(event, 1)}
                      checked={checkedId === 3}
                      onChange={() => handleCheckboxChange(3)}
                    />
                    <div className='text-[color:var(--greyscaletext-70,#313131)] text-base not-italic font-medium leading-[120%]'>
                      Du học cấp 3
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <input
                      className='size-[1.5rem] bg-red-600 border-[1px] border-blue-400 '
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                      // checked={checked1}
                      // onChange={(event) => handleCheckboxChange(event, 1)}
                      checked={checkedId === 4}
                      onChange={() => handleCheckboxChange(4)}
                    />
                    <div className='text-[color:var(--greyscaletext-70,#313131)] text-base not-italic font-medium leading-[120%]'>
                      Du học đại học
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <input
                      className='size-[1.5rem] bg-red-600 border-[1px] border-blue-400 '
                      type='checkbox'
                      id='vehicle1'
                      name='vehicle1'
                      value='Bike'
                      // checked={checked1}
                      // onChange={(event) => handleCheckboxChange(event, 1)}x
                      checked={checkedId === 5}
                      onChange={() => handleCheckboxChange(5)}
                    />
                    <div className='text-[color:var(--greyscaletext-70,#313131)] text-base not-italic font-medium leading-[120%]'>
                      Du học sau đại học
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button />
      </div>
    </div>
  )
}

export default Map
