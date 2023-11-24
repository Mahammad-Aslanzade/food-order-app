import Image from 'next/image'
import Home from './home'
import Head from 'next/head'


export default function Index() {
  return (
    <>
    
    {/* index.html-da olan head -taginin deyisilmesi 
    <Head>
      <title>My App</title>
    </Head> */}
    <h2 className='text-mainYellow font-dancing text-center text-3xl'>salam</h2>
    <Home />
    </>
  )
}
