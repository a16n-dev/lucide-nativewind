import type { ForwardRefExoticComponent } from "react";
import type { SvgProps } from "react-native-svg";

/**
 * A reduced version of `SVGElementType` from @types/react. This type was added
 * with the release of React 19, and is included here in order to support usage
 * with older versions.
 */
type SVGElementType =
  | "circle"
  | "ellipse"
  | "g"
  | "line"
  | "path"
  | "polygon"
  | "polyline"
  | "rect";

export type IconNode = [
  elementName: SVGElementType,
  attrs: Record<string, string>,
][];

export interface NativeWindIconProps extends SvgProps {
  className?: string;
  size?: string | number;
}

export type NativeWindIcon = ForwardRefExoticComponent<NativeWindIconProps>;
