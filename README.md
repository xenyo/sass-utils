# @xenyo/sass-utils

General-purpose Sass utils for Xenyo web development projects.

## Installation

```bash
npm i @xenyo/sass-utils
```

## Usage

Create `sass-utils/_index.scss` in your project root with the following code:

```scss
@forward '@xenyo/sass-utils';

// Add custom variables or mixins here
// DO NOT output any CSS, doing so will cause unnecessary duplication
```

Then, add this to the top of your scss files:

```scss
@use 'sass-utils' as *;
```

Alternatively, if you don't need to add any customizations, just use this:

```scss
@use '@xenyo/sass-utils' as *;
```

The `sass-utils/_index.scss` won't be needed in this case.

## Tests

All utilites are unit tested with [True](https://github.com/oddbird/true).

Run tests:

```
npm test
```

Watch files for changes:

```
npm run watch
```

## API Reference

- [animate](#animate)
- [full-width](#full-width)
- [hide-text](#hide-text)
- [line-clamp](#line-clamp)
- [media](#media)
  - [below](#belowmax-width)
  - [above](#abovemin-width)
  - [between](#betweenmin-width-max-width)
- [transition](#transition)
- [trim-margin](#trim-margin)

### animate

#### animate()

Adds a keyframe animation with a unique, randomly-generated animation name.

```scss
// Source
.my-element {
  @include animate {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}

// Output
.my-element {
  animation: animate-u09hl8n 0.3s ease-out;
}

@keyframes animate-u09hl8n {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

#### Custom properties

| Property | Default | Description |
| --- | --- | --- |
| `--animation-duration` | 0.3s | The animation duration. |
| `--animation-timing-function` | ease-out | The animation timing function. |

### full-width

#### full-width()

Forces an element to be the width of the browser window.

See https://css-tricks.com/full-width-containers-limited-width-parents/

This method ignores the width of the vertical scrollbar, which can lead to
unexpected results. Use sparingly.

### hide-text

#### hide-text()

Hides the text inside an element without affecting any other child elements.

See https://stackoverflow.com/questions/471510/hide-text-using-css

### line-clamp

#### line-clamp($lines: 1)

Clamps the text inside an element to N lines.

See https://css-tricks.com/line-clampin/

### media

#### below($max-width)

Outputs a media query that applies styles for viewports less than the given width.

```scss
// Source
$lg: 1500px;

.my-element {
  @include below($lg) {
    display: none;
  }
}

// Output
@media (max-width: 1499.98px) {
  .my-element {
    display: none;
  }
}
```

#### above($min-width)

Outputs a media query that applies styles for viewports greater than or equal to the given width.

```scss
// Source
$lg: 1500px;

.my-element {
  @include above($lg) {
    display: none;
  }
}

// Output
@media (min-width: 1500px) {
  .my-element {
    display: none;
  }
}
```

#### between($min-width, $max-width)

Outputs a media query that applies styles for viewports between the given widths, including `$min-width` and excluding `$max-width`.

```scss
// Source
$md: 1000px;
$lg: 1500px;

.my-element {
  @include between($md, $lg) {
    display: none;
  }
}

// Output
@media (min-width: 1000px) and (max-width: 1499.98px) {
  .my-element {
    display: none;
  }
}
```

### transition

#### transition($properties: all)

Applies a transition to the given property names.

```scss
// Source
.my-element {
  @include transition;
}

// Output
.my-element {
  transition: all 0.3s ease-out;
}
```

Pass a single property name:

```scss
// Source
.my-element {
  @include transition(opacity);
}

// Output
.my-element {
  transition: opacity 0.3s ease-out;
}
```

Pass multiple propery names:

```scss
// Source
.my-element {
  @include transition(opacity transform);
}

// Output
.my-element {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
```

#### Custom properties

| Property | Default | Description |
| --- | --- | --- |
| `--transition-duration` | 0.3s | The transition duration. |
| `--transition-timing-function` | ease-out | The transition timing function. |

### trim-margin

#### trim-margin($directions: top bottom)

Trims the margins of first-child and last-child elements.

```scss
// Source
.my-element {
  margin: 10px;

  @include trim-margin;
}

// Output
.my-element {
  margin: 10px;
}

.my-element:first-child {
  margin-top: 0;
}

.my-element:last-child {
  margin-bottom: 0;
}
```

Pass any combination of `top`, `bottom`, `left` and `right` to trim in those
directions only:

```scss
// Source
.my-element {
  margin: 10px;

  @include trim-margin(left right);
}

// Output
.my-element {
  margin: 10px;
}

.my-element:first-child {
  margin-left: 0;
}

.my-element:last-child {
  margin-right: 0;
}
```
