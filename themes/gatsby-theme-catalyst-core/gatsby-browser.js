import React from "react"
import { NavProvider } from "./src/contexts/nav-context"
import { MobileProvider } from "./src/contexts/mobile-context"
import { HomeProvider } from "./src/contexts/home-context"
import { MDXProvider } from "@mdx-js/react"
import SEO from "./src/utils/seo"

export const wrapRootElement = ({ element }) => {
  return (
    <MobileProvider>
      <HomeProvider>
        <NavProvider>
          <MDXProvider components={{ SEO }}>{element}</MDXProvider>
        </NavProvider>
      </HomeProvider>
    </MobileProvider>
  )
}
