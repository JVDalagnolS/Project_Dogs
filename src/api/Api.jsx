import React from 'react'
import UserPost from './endpoint/UserPost'
import TokenPost from './endpoint/TokenPost'
import PhotoPost from './endpoint/PhotoPost'
import PhotoGet from './endpoint/PhotoGet'

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>Token POST</h2>
      <TokenPost />
      <h2>PHOTO POST</h2>
      <PhotoPost />
      <h2>PHOTO GET</h2>
      <PhotoGet />
    </div>
  )
}

export default Api