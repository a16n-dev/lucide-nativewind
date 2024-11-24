<p align="center" dir="auto">
<img src="https://github.com/easyrent-club/lucide-mui/assets/39721828/3b7a39c2-946e-481d-aa96-e6b01e23eba4" width="200"  />
</p>

# Lucide Icons for MUI
This package provides [Lucide icons](https://lucide.dev/) as React components designed for use with [Material UI](https://mui.com/material-ui/), so that they can be used in the same way icons from `@mui/icons-material` are used.

## Installation
You can use either npm or yarn:

Using npm:

```bash
npm install lucide-mui
```
Using yarn:

```bash
yarn add lucide-mui
```
## Usage
`lucide-mui` is built with ES modules so it's completely tree-shakable. Each icon can be imported as a react component.


All icons can be imported using their names from the [Lucide documentation](https://lucide.dev/), converted to PascalCase.
For example, `arrow-left-circle` becomes `ArrowLeftCircle`
```jsx
import { ArrowLeftCircle } from 'lucide-mui';
```
You can then use these icons anywhere as you would material icons

```jsx
<Button startIcon={<ArrowLeftCircle/>}>Click me</Button>
```

They also support all props of the [`SvgIcon` Material UI component](https://mui.com/material-ui/api/svg-icon/):
```jsx
<ArrowLeftCircle color="primary" sx={{mx: 2}}/>
```

## Versioning
The version is automatically kept in sync with `lucide`

## Contributing
All contributions welcome. Contributions/requests for new/updated icons should be directed to the lucide project: https://github.com/lucide-icons/lucide

## FAQs
### Whats the difference between this and lucide-react?
Lucide-react provides React components, however these components don't integrate seamlessly with Material UI, requiring extra work to use them in place of material icons.

### What icons are available?
All lucide icons are available, and this package will be updated whenever new icons are added to lucide. This package is not intended to add any additional or custom icons.

