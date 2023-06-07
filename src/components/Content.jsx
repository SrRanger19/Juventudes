import React from 'react'
import Card from './Card';
import Information from './Information';

const Content = () => {
  return (
    <div className="h-[86%] w-[80%] absolute right-0 top-24">
      <Card/>
      <Information/>
    </div>
  )
}

export default Content;