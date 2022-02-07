import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

const Header: React.FC = () => {
  return (
    <header className="bg-cyan-400">
      <div className="container mx-auto h-10 flex items-center">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={36}
              height={36}
              placeholder="blur" // Optional blur-up while loading
            />
            <h1 className="mb-0 text-lg text-white">开发者推广</h1>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default memo(Header)
