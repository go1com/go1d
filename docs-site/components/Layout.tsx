import * as React from 'react'
import View from '@go1d/go1d/build/components/View'
import foundations from '@go1d/go1d/build/foundations/';

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <View
        marginX="auto"
        padding={5}
        css={{
          [foundations.breakpoints.sm]: { maxWidth: "375px" },
          [foundations.breakpoints.md]: { maxWidth: "972px" },
          [foundations.breakpoints.lg]: { maxWidth: "1068px" },
        }}
      >
        {children}
      </View>
    </React.Fragment>
  )
}

export default Layout
