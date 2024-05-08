
import dynamic from 'next/dynamic';
const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false
});
const index = ({ isMobile }) => {
  return (
    <div>
      <DynamicMap isMobile={isMobile} />
    </div>
  )
}

export default index
