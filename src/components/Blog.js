import React from 'react'
import Banner from './Banner'

function Blog() {
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1496395650962-374cae58ca8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80'
        }
        header={'Blog'}
        detail={'Meditations and Ruminations'}
        textColor={'white'}
      />
      <h2 className="mb-1">Stay tuned for upcoming blog posts...</h2>
    </>
  );
}

export default Blog
