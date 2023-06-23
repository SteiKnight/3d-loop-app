
const CarVideo = () => {
  return (
     <video className="h-100vh w-full object-cover" autoPlay muted loop>
        <source src="src/videos/pexels-tom-fisk.mp4" type="video/mp4"/>
    </video>
  )
}

export default CarVideo
