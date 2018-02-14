import * as styles from './styles'

export * as styles from './styles'
export {
  width,
  fontSize,
  textColor,
  bgColor,
  color,
  // typography
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  // layout
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  ratio,
  // flexbox
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  // borders
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borders,
  borderColor,
  borderRadius,
  // misc
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  // psuedoclasses
  hover,
  focus,
  active,
  disabled,
  // deprecated
  borderWidth,
} from './styles'

export {
  style,
  pseudoStyle,
  responsiveStyle,
  themeGet,
  themeGet as theme
} from './util'

export { default as space } from './space'
export * as util from './util'

export const propTypes = {}

Object.keys(styles).forEach(key => {
  propTypes[key] = styles[key].propTypes
})

styles.propTypes = propTypes

export default styles
