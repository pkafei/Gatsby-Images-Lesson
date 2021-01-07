import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <div class="layout">
        <Image class="left-image"/>
        <h2>Hello</h2>
        <p>Welcome to my humble site</p>
        <p>All of our shirts are on sale!</p>
        <button class="shop-button">Shop</button>

      </div>
    </Layout>
)

export default IndexPage
