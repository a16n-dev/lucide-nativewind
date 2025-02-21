import { forwardRef, createElement, FunctionComponent } from "react";
import * as NativeSvg from "react-native-svg";
import defaultAttributes, { childDefaultAttributes } from "./defaultAttributes";
import { IconNode, NativeWindIcon, NativeWindIconProps } from "./types";

const createIcon = (iconName: string, iconNode: IconNode): NativeWindIcon => {
  const Component = forwardRef(
    ({ className, children, ...customAttrs }: NativeWindIconProps, ref) => {
      return createElement(
        NativeSvg.Svg as unknown as string,
        {
          ref,
          ...defaultAttributes,
          className,
          width: 24,
          height: 24,
          stroke: "currentColor",
          strokeWidth: 2,
          ...customAttrs,
        },
        [
          ...iconNode.map(([tag, attrs]) => {
            const upperCasedTag = (tag.charAt(0).toUpperCase() +
              tag.slice(1)) as keyof typeof NativeSvg;
            // duplicating the attributes here because generating the OTA update bundles don't inherit the SVG properties from parent (codepush, expo-updates)
            return createElement(
              NativeSvg[
                upperCasedTag
              ] as FunctionComponent<NativeWindIconProps>,
              {
                ...childDefaultAttributes,
                ...customAttrs,
                ...attrs,
              } as NativeWindIconProps,
            );
          }),
          ...((Array.isArray(children) ? children : [children]) || []),
        ],
      );
    },
  );

  Component.displayName = `${iconName}`;

  return Component;
};

export default createIcon;
