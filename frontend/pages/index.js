import React, { useEffect } from 'react'
import Layout from '@components/templates/Layout'
import { test } from '@store/user/action'
import HomePage from "@organisms/HomePage";

const Home = () => {
  useEffect(() => {
    test()
  }, [])
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default Home
