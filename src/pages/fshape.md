---
title: F-shape
setup: | 
  import Component from '../layouts/fshape.astro'
  import BaseLayout from '../layouts/baseLayout.astro'
---
<BaseLayout title={frontmatter.title}>
  <Component title={frontmatter.title}>
    <p>Layout for split screen header</p>
  </Component>
</BaseLayout>