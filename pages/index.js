import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/Button'

export default function Home() {
  return (
    <div>
     Hello

      <div style={{width: 200}}>
        <Button text={'Login'} handleClick={() => console.log('clicked')}/>
      </div>
    </div>
  )
}
