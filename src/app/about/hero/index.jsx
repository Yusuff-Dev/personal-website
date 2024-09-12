import Locomotive from '../../../components/locomotive'
import Image from 'next/image'
// import Heading from '../../../components/heading'

function index() {
  return (
    <section className='relative h-screen'>
      <Locomotive dur={0.01}>About me About me About me About me</Locomotive>
      <div className='absolute top-0 left-0 w-full h-full flex items-end justify-center'>
        <div className='mx-4 bg-white-smoke rounded-[25px] h-[calc(40vh+20vw)] -translate-y-5 basis-[450px] overflow-hidden
        '>
          <Image
            className='w-full h-full object-contain'
            src={`/img/coding.svg`}
            width={100}
            height={100}
            alt='me'
            />
        </div>
      </div>
    </section>
  )
}

export default index