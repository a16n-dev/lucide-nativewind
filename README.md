# Lucide Icons for React Native with NativeWind
  [![npm](https://img.shields.io/npm/v/lucide-nativewind?color=blue)](https://www.npmjs.com/package/lucide-nativewind)
  ![NPM Downloads](https://img.shields.io/npm/dw/lucide-nativewind)
  [![GitHub](https://img.shields.io/github/license/lucide-icons/lucide)](https://lucide.dev/license)
  
A drop in replacement for `lucide-react-native` to work with NativeWind. It provides [Lucide icons](https://lucide.dev/) with an additional `className` prop to allow for easy integration with [NativeWind](https://www.nativewind.dev/).

## Installation
You can use either npm or yarn:

Using npm:

```bash
npm install lucide-nativewind
```
Using yarn:

```bash
yarn add lucide-nativewind
```
## Usage
`lucide-nativewind` is built with ES modules so it's completely tree-shakable. Each icon can be imported as a react component.


All icons can be imported the same as if using the `lucide-react-native` package
```diff
- import { ArrowLeftCircleIcon } from 'lucide-react-native';
+ import { ArrowLeftCircleIcon } from 'lucide-nativewind';
```

## Custom Icons
Custom icons can be wrapped with `iconWithClassName` to add the `className` prop.

```jsx
import { iconWithClassName } from 'lucide-nativewind';
import MyCustomIcon from './MyCustomIcon';

const MyCustomIconWithClassName = iconWithClassName(MyCustomIcon);
```

## Versioning
The version is automatically kept in sync with `lucide-react-native`

## Contributing
All contributions welcome. Contributions/requests for new/updated icons should be directed to the lucide project: https://github.com/lucide-icons/lucide

## FAQs

### What icons are available?
All lucide icons are available, and this package will be updated whenever new icons are added to lucide. This package is not intended to add any additional or custom icons.

