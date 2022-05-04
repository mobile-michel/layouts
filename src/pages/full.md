---
title: Full screen
setup: | 
  import Component from '../layouts/full.astro'
  import BaseLayout from '../layouts/baseLayout.astro'
---
<BaseLayout title={frontmatter.title}>
  <Component title={frontmatter.title}>
    <p>Layout for full screen header</p>
  </Component>
</BaseLayout>