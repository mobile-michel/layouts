---
title: Boxes
setup: | 
  import Component from '../layouts/boxes.astro'
  import BaseLayout from '../layouts/baseLayout.astro'
---
<BaseLayout title={frontmatter.title}>
  <Component title={frontmatter.title}>
    <p>Layout for split screen header</p>
  </Component>
</BaseLayout>