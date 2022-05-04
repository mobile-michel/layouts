---
title: Split screen
setup: | 
  import Component from '../layouts/split.astro'
  import BaseLayout from '../layouts/baseLayout.astro'
---
<BaseLayout title={frontmatter.title}>
  <Component title={frontmatter.title}>
    <p>Layout for split screen header</p>
  </Component>
</BaseLayout>