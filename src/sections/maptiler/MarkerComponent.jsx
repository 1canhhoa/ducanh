import {
  useMap,
  Marker,
  Popup,
  Tooltip,
} from 'react-leaflet'
import L, { divIcon, point } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-cluster'
import 'react-leaflet-markercluster/dist/styles.min.css'
import markers_mork from '@/lib/json/markers_mork.json'
import Image from 'next/image'
import maker_demo from "@/lib/json/maker_demo.json"
import { useState, useEffect } from 'react'
const dataPropertiesUniversity = [
  {
    location: 'United States ',
    name: 'Massachusetts Institute of Technology (MIT)',
    students: '2.414.212',
    thumb: "https://univerlist.com/media/images/blog/DYS72CKU0AAhCEK.jpg"
  },
  {
    location: 'United Kingdom ',
    name: 'University of Cambridge ',
    students: '3.814.212',
    thumb: "https://univerlist.com/media/images/university/cambridgepic.jpg"
  },
  {
    location: 'United States ',
    name: 'University of Oxford ',
    students: '1.414.212',
    thumb: "https://korea.studyabroadfoundation.org/sites/default/files/2022-07/University_of_Oxford_Featured_02.jpg"
  },
  {
    location: 'United States ',
    name: 'Harvard University ',
    students: '1.414.212',
    thumb: "https://th.bing.com/th/id/R.883f081f80297dd0b451f8d1ea5b3d38?rik=XLRonrwdehYYIg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd5%2fSever_Hall_(Harvard_University)_-_east_facade.JPG&ehk=kf8DmxIQNUEwgEN3K4uBDIp1ky9t%2fOYZiMg%2bKGy%2bTeM%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    location: 'United States ',
    name: 'Stanford University ',
    students: '2.414.212',
    thumb: "https://th.bing.com/th/id/OIP.vjgxY6eZMbjkXWIxT_gsjAHaE8?pid=ImgDet&w=474&h=316&rs=1"
  },
]





const MarkerComponent = ({ checkedId, positionSearch }) => {

  const [filterMarker, setFilterMarker] = useState(markers_mork?.features)
  const map = useMap()

  const handleFilter = (n) => {
    const rs = markers_mork?.features?.filter((f, i) => f?.properties?.eduLevel === n)
    return rs
  }
  useEffect(() => {
    if (checkedId === 4) {
      setFilterMarker(handleFilter(4))
    }
    if (checkedId === 3) {
      setFilterMarker(handleFilter(3))
    }
    if (checkedId === 5) {
      setFilterMarker(handleFilter(5))
    }
    if (checkedId === -1) {
      setFilterMarker(markers_mork?.features)
    }
  }, [checkedId])

  useEffect(() => {
    if (positionSearch?.length > 0) {
      map?.flyTo(positionSearch, 14)
    }
  }, [positionSearch])

  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span"></span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };
  const icon_schoool = L.icon({
    Draggable: true,
    iconUrl: './images/aside/pin-school.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })


  const randomUniversity = dataPropertiesUniversity[Math.floor(Math.random() * dataPropertiesUniversity.length)];
  const modifiedUniversity = { ...randomUniversity };
  delete modifiedUniversity.thumb;

  return (
    <div>
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {filterMarker?.map((marker, i) => (
          <Marker
            key={i}
            position={[
              marker?.geometry?.coordinates[1],
              marker?.geometry?.coordinates[0],
            ]}
            icon={icon_schoool}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(),
              // mouseout: (event) => event.target.closePopup(),
              click: () => {
                map.flyTo(
                  [
                    marker.geometry.coordinates[1],
                    marker.geometry.coordinates[0]
                  ],
                  14
                );
              }
            }}
          >
            <Popup
              offset={[0, -40]}
            >
              <div className=" w-fit group cursor-pointer">
                <div className="overflow-hidden rounded-2xl">
                  <Image priority alt="ảnh" src={randomUniversity?.thumb} width={200} height={200} className="group-hover:scale-125 duration-500 ease-linear rounded-xl w-[15rem]" />
                </div>
                <div className="flex flex-col items-start w-[15rem] p-2">
                  {Object.entries(modifiedUniversity).map(([key, value]) => (
                    <div key={key} className="flex items-start ">
                      <span className="mr-2 text-primary-50 text-base not-italic font-normal leading-[160%]">{key}:</span>
                      <span className="  flex flex-col justify-center flex-[1_0_0] text-greyscaletext-50 text-base not-italic font-normal leading-[1.5]"> {value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Popup>
            {/* <Tooltip
              permanent={true}
              direction="bottom"
              offset={[0, 20]}
              sticky
              className='!w-max'>
              <div className="p-[0.25rem] bd bg-white bd">
                <Image priority alt="ảnh" src={randomUniversity?.thumb} width={200} height={200} className="w-full h-[5rem]" />
                <div className="flex flex-col items-start w-fit">
                  <div className="">flex flex-col items-startflex flex-col items-startflex flex-col items-start</div>
                  {Object.entries(modifiedUniversity).map(([key, value]) => (
                    <div key={key} className="flex items-start">
                      <span className="min-w-max">{key}:</span>
                      <div className="w-[2rem]"> {value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Tooltip> */}
          </Marker>
        ))}
      </MarkerClusterGroup>


      {maker_demo?.features?.map((marker, i) => (
        <Marker
          key={i}
          position={[
            marker?.geometry?.coordinates[1],
            marker?.geometry?.coordinates[0],
          ]}
          icon={icon_schoool}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
            // mouseout: (event) => event.target.closePopup(),
            click: () => {
              map.flyTo(
                [
                  marker.geometry.coordinates[1],
                  marker.geometry.coordinates[0]
                ],
                14
              );
            }
          }}
        >
          <Popup
            offset={[0, -40]}
          >
            <div className=" w-fit group cursor-pointer">
              <div className="overflow-hidden rounded-2xl">
                <Image priority alt="ảnh" src={randomUniversity?.thumb} width={200} height={200} className="group-hover:scale-125 duration-500 ease-linear rounded-xl w-[15rem]" />
              </div>
              <div className="flex flex-col items-start w-[15rem] p-2">
                {Object.entries(modifiedUniversity).map(([key, value]) => (
                  <div key={key} className="flex items-start ">
                    <span className="mr-2 text-primary-50 text-base not-italic font-normal leading-[160%]">{key}:</span>
                    <span className="  flex flex-col justify-center flex-[1_0_0] text-greyscaletext-50 text-base not-italic font-normal leading-[1.5]"> {value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  )
}

export default MarkerComponent
