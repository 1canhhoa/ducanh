import { useState, useCallback, useEffect } from 'react'
const center = [51.505, -0.09]
const zoom = 13

export default function DisplayPosition({ map, zoomLevel }) {
  const [position, setPosition] = useState(() => map?.getCenter())

  // const onClick = useCallback(() => {
  //   map.setView(center, zoom)
  // }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])



  return (
    <p className="font-extrabold flex space-x-[1rem] opacity-80 items-center justity-center text-[0.9rem] min-w-max text-[#a78bfa] fixed top-[1rem] left-[5rem] z-[1000]">
      <p className="w-max min-w-[5rem]">{position.lat >= 0 ? '+' : ''}{position.lat.toFixed(4)}</p>
      <p className="w-max min-w-[5rem]">{position.lng >= 0 ? '+' : ''}{position.lng.toFixed(4)}</p>
      <p className="w-max">{zoomLevel}</p>
      {/* <button onClick={onClick}>reset</button> */}

    </p>
  )
}
