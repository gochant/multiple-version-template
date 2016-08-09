
# pukit

一个 pug mixin 工具包，一种维护 HTML 模板的简单模式：

> 配置 + 模板 = HTML


**model.js**

```js
'use strict';

var models = {
    context1: {
        person: {
            fields: {
                name: {
                    displayName: 'Name',
                    type: 'string'
                },
                birth: {
                    displayName: 'Birthday',
                    type: 'date'
                }
            }
        }
    }
}

module.exports = models;
```

**template.pug**

```pug
---
model: person
---
+navbar
  +nav
    +nav-item #{model.fields.name.displayName}
    +nav-item #{model.fields.birth.displayName}

+display-for(model)
```

**output.html**

```html
<ul class="nav" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link" href="javascript:;">Name</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" href="javascript:;">Birthday</a>
    </li>
</ul>

<label></label>
```