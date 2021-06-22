import * as React from 'react'
// import Head from 'next/head'
import View from '@go1d/go1d/build/components/View'

// const Layout: React.FC = ({ children }) => {
const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <View padding={5}>
        {children}
      </View>
    </React.Fragment>
  )
}

export default Layout
