robodo-masonrify
================

Easily add Masonry-style dynamic layouts to Meteor.

Based on voodoohop:masonrify, but using Masonry, not Isotope as the render engine.

No Coffeescript :)

usage:

```sh
$ meteor add robodo:masonrify
```

The container div is created using the #masonryContainer block helper. For each masonry instance you wish to use define one id for the container, e.g. id="MasonryContainer".

```html
{{#masonryContainer columnWidth=115 transitionDuration="0.1s" id="MasonryContainer" }}
  ...
{{/masonryContainer}}
```

Use the {{#masonryElement}} block helper to create the individual elements to be layouted. Pass the id previously defined...

```html
{{#masonryContainer columnWidth=115 transitionDuration="0.1s" gutter=2 id="MasonryContainer" }}
 {{#each exampleContentCollection}}
   {{#masonryElement "MasonryContainer"}}
     ... content ...
   {{/masonryElement}}
 {{/each}}
{{/masonryContainer}}
```


