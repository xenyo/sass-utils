# @xenyo/sass-utils

General-purpose Sass utils for Xenyo web development projects.

## Installation

```bash
# npm
npm i @xenyo/sass-utils

# yarn
yarn add @xenyo/sass-utils

# pnpm
pnpm add @xenyo/sass-utils
```

## Usage

Add this to the top of any scss file in your project:

```scss
@use '@xenyo/sass-utils' as *;
```

Override default variables:

```scss
@use '@xenyo/sass-utils' as * with (
  $sm: 768px,
  $transition-duration: 0.7s,
  // etc...
);
```

To set project-wide defaults, create `sass-utils/_index.scss` in your project root:

```scss
@forward '@xenyo/sass-utils' with (
  $sm: 768px,
  $transition-duration: 0.7s,
  // etc...
);

// define additional variables or mixins
```

Then add this to the top of any scss file in your project:

```scss
@use 'sass-utils' as *;
```

## API Reference

### animation

#### $animation-duration

The animation duration.

Default: `0.3s`

#### $animation-timing-function

The animation timing function.

Default: `ease-out`

#### animate()

Adds a keyframe animation with a unique, randomly-generated animation name.

```scss
// SCSS
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
  animation: animation-u09hl8n 0.3s ease-out;
}

@keyframes animation-u09hl8n {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

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

#### $lg

The large breakpoint.

Default: `1500px`

#### $md

The medium breakpoint.

Default: `1000px`

#### $lg

The small breakpoint.

Default: `500px`

#### below($max-width)

Outputs a media query that applies styles below the given width (exclusive).

```scss
// SCSS
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

#### above($max-width)

Outputs a media query that applies styles above the given width (inclusive).

```scss
// SCSS
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

### transition

#### $transition-duration

The transition duration.

Default: `0.3s`

#### $transition-timing-function

The transition timing function.

Default: `ease-out`

#### transition($properties: all)

Applies a transition to the given property names.

```scss
// SCSS
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
// SCSS
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
// SCSS
.my-element {
  @include transition(opacity transform);
}

// Output
.my-element {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
```

### trim-margin

#### trim-margin($directions: top bottom)

Trims the margins of first-child and last-child elements.

```scss
// SCSS
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
// SCSS
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
