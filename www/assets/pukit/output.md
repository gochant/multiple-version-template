# Pug Documentation 

## nav



decription: normal navigation
arguments
examples
 0: +nav

```jade
mixin nav
  ul.nav(role='tablist')&attributes(attributes)
    block
```

```html
<ul class="nav" role="tablist"></ul>
```


---


## nav-item
nav item


arguments
 0
  type: string
  default
  nullable: false
  optional: false
  original: {string} href - link address
 1
  type: boolean
  default
  nullable: false
  optional: false
  original: {boolean} active - is active
 2
  type: boolean
  default
  nullable: false
  optional: false
  original: {boolean} toggle - add `(data-toggle='tab')`

```jade
mixin nav-item(href, active, toggle)
  - if(href == null){ href = 'javascript:;'; }
  - var cls = active === true ? 'active' : undefined
    li.nav-item(role='presentation', class=cls)&attributes(attributes)
      if toggle
        a.nav-link(role='tab', data-toggle='tab', href=href)
          block
      else
        a.nav-link(href=href)
          block
```

```html

```


---


## nav-toggle-item
nav toggle item


arguments
 0
  type: string
  default
  nullable: false
  optional: false
  original: {string} href - link address
 1
  type: boolean
  default
  nullable: false
  optional: false
  original: {boolean} active - is active

```jade
mixin nav-toggle-item(href, active)
  +nav-item(href, active, true)&attributes(attributes)
    block
```

```html

```


---


