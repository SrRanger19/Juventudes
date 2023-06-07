import React from 'react'
import Card from './Card';
import HeaderAmbar from './HeaderAmbar';

const Content = () => {
  return (
    <div className="h-[86%] w-[80%] absolute right-0 top-24">
      <HeaderAmbar/>
      <Card/>
    </div>
  )
}

export default Content;