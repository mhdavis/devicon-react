# devicon-react

## Introduction
Devicon React is a Reaction implementation of the [Devicon](https://konpa.github.io/devicon/) (a library containing the logos of many programming tools technologies.)

Devicon React converts the font versions of the logos available `<Devicon />` components used in React!

Similarly, the npm package [React Devicon](https://www.npmjs.com/package/react-devicon) exists should users prefer to add technology logos to their React applications in the form of filesize-optimized SVG components.

## Installation
Using NPM:

`npm install 'devicon-react' --save`

Using Yarn:

`yarn add 'react-devicon'`

## Usage

*__Notice:__ This documentation should be used in tandem with the documentation provided by [Devicon](https://konpa.github.io/devicon/) for desired effect.*

Import the `<Devicon/>` into your own component and use as such:

```javascript
import Devicon from 'devicon-react';

const app = () => {
  <div>
    <Devicon name="react" logoStyle="original"/>
  </div>
}
```

### Component Properties
|Prop        |Type     |Required | Value                                                                            |
|------------|---------|---------|----------------------------------------------------------------------------------|
|`name`      |String   | Yes     | see [Devicon](devicon) for selection                                             |
|`logoStyle` |String   | Yes     | `plain` , `original`                                                             |
|`wordmark`  |Boolean  | No      | `true` , `false` (default)                                                       |
|`colored`   |Boolean  | No      | `true` , `false` (default)                                                       |
|`size`      |String   | No      | `5rem` (default) , `5em` , `10px`                                                |  
|`color`     |Boolean  | No      | `blue` , `#4267b2` , `#46b` , `hsl(220, 45, 47)` , `rgb(66, 103, 178)`           |
|`style`     |Object   | No      | See description below                                                            |
|`iconClass` |String   | No      | See description below                                                            |

### name
The value of this prop should be set to the desired icon. See [Devicon](https://konpa.github.io/devicon/) for available options.
```javascript
<Devicon name="react" logoStyle="original"/>
```

### logoStyle
This prop can either be `plain` or `original`, see [Devicon](https://konpa.github.io/devicon/) for visualization.
```javascript
<Devicon name="appcelerator" logoStyle="original"/>
<Devicon name="appcelerator" logoStyle="plain"/>
```
__Note:__ Depending on the icon, a brand can have a logo style `plain`, `original`, or a mixture of
the two. In some cases, a brand may only variants of one type. The user should consult the [Devicon](https://konpa.github.io/devicon/) available options on a per-icon basis.

### wordmark
Setting this prop to `true` will display the icon logo with it's name. See [Devicon](https://konpa.github.io/devicon/) for visualization.
```javascript
<Devicon name="react" logoStyle="original" wordmark={true}/>
```

### colored
This takes advantage of the [Devicon's](https://konpa.github.io/devicon/) `colored` class. Setting to `true` will set the icon's color to its brand color.
```javascript
<Devicon name="react" logoStyle="original" colored={true}/>
```
__Note:__ This prop overwrites any custom color passed
via the `color` property. Likewise, this property overwrites any custom styling added via the `style` property

### size
This prop allows the user to specify a font size for the icon. Because it uses CSS's `font-size` property,
all font size unit types are permitted.
```javascript
<Devicon name="react" logoStyle="original" size="7rem"/>
<Devicon name="react" logoStyle="original" size="5em"/>
<Devicon name="react" logoStyle="original" size="20px"/>
```

### color
This prop uses CSS to color the font and can take any recognized color type as a string argument.
```javascript
<Devicon name="react" logoStyle="original" color="blue"/>
<Devicon name="react" logoStyle="original" color="#4267b2"/>
<Devicon name="react" logoStyle="original" color="rgb(66, 103, 178)"/>
```

### style
This prop allows the user to pass a style object into the Devicon inline or as an external object.

##### Inline
```javascript
<Devicon name="react" logoStyle="original" style={ {"font-size" : "5rem", "color": "blue" } }/>
```

##### External Object
```javascript
let myStyle = {
  fontSize : "5rem",
  color: "blue"
}

<Devicon name="react" logoStyle="original" style={myStyle}/>
```

### iconClass
This prop allows the user to write external CSS for a `<Devicon/>` and pass it as a className
to the `<Devicon/>`. This provides the user with the most flexbility, allowing them to
manipulate the icon as they would any element through CSS.

#### CSS (myStyle.css)
```CSS
.custom-icon {
  font-size: 5rem;
  color: grey;
  transition: 0.3s;
}

.custom-icon:hover {
  font-size: 7rem;
  color: blue;
}
```
#### React Component
```javascript
import Devicon from 'devicon-react';
import './myStyle.css';

const app = () => {
  <Devicon name="react" logoStyle="original" iconClass="custom-icon" />
}
```
__Note:__ This prop overwrites any custom color passed
via the `color` property. Likewise, this property overwrites any custom styling added via the `style` property

### Credits

All icon fonts were taken from [Devicon](https://konpa.github.io/devicon/) created by [Konpa](https://github.com/konpa/)

The idea to build the devicon-react came from the work done on [react-devicon](https://www.npmjs.com/package/react-devicon) by [fpoumian](https://github.com/fpoumian)

Devicon React is an open source project and is released under the __MIT license__
