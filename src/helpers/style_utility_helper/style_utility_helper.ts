import { FlexStyle, TextStyle, ViewStyle } from "react-native";
import { theme } from "src/theme";
import { Falsy } from "src/types";
import { isTruthy } from "src/type_guards/is_truthy";
import {
  applySpacer,
  Spacer,
  SpacerSet,
} from "src/helpers/spacer_utility_helper";

type TextUtils =
  | "font-bold"
  | "font-normal"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "italic-bold"
  | "italic"
  | "not-italic"
  | "text-2xl"
  | "text-3xl"
  | "text-base"
  | "text-lg"
  | "text-sm"
  | "text-xl"
  | "text-xs"
  | "underline"
  | "line-through"
  | "no-underline"
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify";

type TextColorUtils =
  | "text-danger"
  | "text-gray-50"
  | "text-gray-100"
  | "text-gray-200"
  | "text-gray-300"
  | "text-gray-400"
  | "text-gray-500"
  | "text-gray-600"
  | "text-gray-700"
  | "text-gray-800"
  | "text-gray-900"
  | "text-primary"
  | "text-secondary"
  | "text-success"
  | "text-warning"
  | "text-white";

type BackgroundColorUtilities =
  | "bg-danger"
  | "bg-gray-50"
  | "bg-gray-100"
  | "bg-gray-200"
  | "bg-gray-300"
  | "bg-gray-400"
  | "bg-gray-500"
  | "bg-gray-600"
  | "bg-gray-700"
  | "bg-gray-800"
  | "bg-gray-900"
  | "bg-primary"
  | "bg-secondary"
  | "bg-success"
  | "bg-transparent"
  | "bg-warning"
  | "bg-white";

type BorderColorUtilities =
  | "border-danger"
  | "border-gray-50"
  | "border-gray-100"
  | "border-gray-200"
  | "border-gray-300"
  | "border-gray-400"
  | "border-gray-500"
  | "border-gray-600"
  | "border-gray-700"
  | "border-gray-800"
  | "border-gray-900"
  | "border-primary"
  | "border-secondary"
  | "border-success"
  | "border-transparent"
  | "border-white";

type BorderUtilities =
  | "border-0"
  | "border-2"
  | "border-4"
  | "border-8"
  | "border-b-0"
  | "border-b-2"
  | "border-b-4"
  | "border-b-8"
  | "border-b"
  | "border-l-0"
  | "border-l-2"
  | "border-l-4"
  | "border-l-8"
  | "border-l"
  | "border-r-0"
  | "border-r-2"
  | "border-r-4"
  | "border-r-8"
  | "border-r"
  | "border-t-0"
  | "border-t-2"
  | "border-t-4"
  | "border-t-8"
  | "border-t"
  | "border"
  | "rounded-b-full"
  | "rounded-b-lg"
  | "rounded-b-md"
  | "rounded-b-none"
  | "rounded-b-sm"
  | "rounded-b"
  | "rounded-full"
  | "rounded-lg"
  | "rounded-md"
  | "rounded-none"
  | "rounded-sm"
  | "rounded-t-full"
  | "rounded-t-lg"
  | "rounded-t-md"
  | "rounded-t-none"
  | "rounded-t-sm"
  | "rounded-t"
  | "rounded-tl-md"
  | "rounded-tr-md"
  | "rounded";

type FlexUtils =
  | "flex-1"
  | "flex-col-reverse"
  | "flex-col"
  | "flex-grow-0"
  | "flex-grow"
  | "flex-no-wrap"
  | "flex-none"
  | "flex-row-reverse"
  | "flex-row"
  | "flex-shrink-0"
  | "flex-shrink"
  | "flex-wrap-reverse"
  | "flex-wrap"
  | "items-baseline"
  | "items-center"
  | "items-end"
  | "items-start"
  | "items-stretch"
  | "justify-around"
  | "justify-between"
  | "justify-center"
  | "justify-end"
  | "justify-evenly"
  | "justify-start"
  | "self-auto"
  | "self-center"
  | "self-end"
  | "self-start"
  | "self-stretch";

type PositionUtils =
  | "absolute"
  | "bottom-0"
  | "inset-0"
  | "left-0"
  | "relative"
  | "right-0"
  | "top-0";

type SizeUtils = "h-full" | "w-full";

type OpacityUtils =
  | "opacity-0"
  | "opacity-100"
  | "opacity-25"
  | "opacity-50"
  | "opacity-75";

type ShadowUtils =
  | "shadow-lg"
  | "shadow-md"
  | "shadow-sm"
  | "shadow-xl"
  | "shadow-xs"
  | "shadow";

type OverflowUtils =
  | "overflow-auto"
  | "overflow-hidden"
  | "overflow-scroll"
  | "overflow-visible";

type ZIndexUtils = "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50";

/**
 * Based on tailwind utilities, check out https://tailwindcss.com/docs/utility-first
 */
export type UtilityName =
  | BackgroundColorUtilities
  | BorderColorUtilities
  | BorderUtilities
  | FlexUtils
  | PositionUtils
  | TextUtils
  | TextColorUtils
  | OpacityUtils
  | SizeUtils
  | OverflowUtils
  | ShadowUtils
  | ZIndexUtils;

export type Util = Array<UtilityName | Spacer | Falsy> | null | undefined;
export type UtilProp = {
  util?: Util;
};

type UtilityNameFlexMap = {
  [key in UtilityName]: {
    [FlexKey in keyof FlexStyle]: FlexStyle[FlexKey];
  };
};

type UtilityNameTextMap = {
  [key in UtilityName]: {
    [TextKey in keyof TextStyle]: TextStyle[TextKey];
  };
};

type UtilityNameViewMap = {
  [key in UtilityName]: {
    [ViewKey in keyof ViewStyle]: ViewStyle[ViewKey];
  };
};

const utilityNameMap: UtilityNameFlexMap &
  UtilityNameTextMap &
  UtilityNameViewMap = {
  "flex-1": {
    flex: 1,
  },
  "flex-col": {
    flexDirection: "column",
  },
  "flex-col-reverse": {
    flexDirection: "column-reverse",
  },
  "flex-none": {
    flex: undefined,
  },
  "flex-row": {
    flexDirection: "row",
  },
  "flex-row-reverse": {
    flexDirection: "row-reverse",
  },
  "flex-wrap": {
    flexWrap: "wrap",
  },
  "flex-no-wrap": {
    flexWrap: "nowrap",
  },
  "flex-wrap-reverse": {
    flexWrap: "wrap-reverse",
  },
  "flex-grow": {
    flexGrow: 1,
  },
  "flex-grow-0": {
    flexGrow: 0,
  },
  "flex-shrink": {
    flexShrink: 1,
  },
  "flex-shrink-0": {
    flexShrink: 0,
  },
  "justify-around": {
    justifyContent: "space-around",
  },
  "justify-between": {
    justifyContent: "space-between",
  },
  "justify-center": {
    justifyContent: "center",
  },
  "justify-end": {
    justifyContent: "flex-end",
  },
  "justify-evenly": {
    justifyContent: "space-evenly",
  },
  "justify-start": {
    justifyContent: "flex-start",
  },
  "items-baseline": {
    alignItems: "baseline",
  },
  "items-center": {
    alignItems: "center",
  },
  "items-end": {
    alignItems: "flex-end",
  },
  "items-start": {
    alignItems: "flex-start",
  },
  "items-stretch": {
    alignItems: "stretch",
  },
  "self-auto": {
    alignSelf: "auto",
  },
  "self-center": {
    alignSelf: "center",
  },
  "self-end": {
    alignSelf: "flex-end",
  },
  "self-start": {
    alignSelf: "flex-start",
  },
  "self-stretch": {
    alignSelf: "stretch",
  },

  "bg-white": {
    backgroundColor: "white",
  },

  "bg-danger": {
    backgroundColor: theme.colors.danger,
  },
  "bg-success": {
    backgroundColor: theme.colors.success,
  },
  "bg-gray-50": {
    backgroundColor: theme.colors["gray-50"],
  },
  "bg-gray-100": {
    backgroundColor: theme.colors["gray-100"],
  },
  "bg-gray-200": {
    backgroundColor: theme.colors["gray-200"],
  },
  "bg-gray-300": {
    backgroundColor: theme.colors["gray-300"],
  },
  "bg-gray-400": {
    backgroundColor: theme.colors["gray-400"],
  },
  "bg-gray-500": {
    backgroundColor: theme.colors["gray-500"],
  },
  "bg-gray-600": {
    backgroundColor: theme.colors["gray-600"],
  },
  "bg-gray-700": {
    backgroundColor: theme.colors["gray-700"],
  },
  "bg-gray-800": {
    backgroundColor: theme.colors["gray-800"],
  },
  "bg-gray-900": {
    backgroundColor: theme.colors["gray-800"],
  },
  "bg-primary": {
    backgroundColor: theme.colors.primary,
  },
  "bg-secondary": {
    backgroundColor: theme.colors.secondary,
  },
  "bg-transparent": {
    backgroundColor: "transparent",
  },

  "text-white": {
    color: "white",
  },
  "text-danger": {
    color: theme.colors.danger,
  },
  "text-success": {
    color: theme.colors.success,
  },
  "text-gray-50": {
    color: theme.colors["gray-50"],
  },
  "text-gray-100": {
    color: theme.colors["gray-100"],
  },
  "text-gray-200": {
    color: theme.colors["gray-200"],
  },
  "text-gray-300": {
    color: theme.colors["gray-300"],
  },
  "text-gray-400": {
    color: theme.colors["gray-400"],
  },
  "text-gray-500": {
    color: theme.colors["gray-500"],
  },
  "text-gray-600": {
    color: theme.colors["gray-600"],
  },
  "text-gray-700": {
    color: theme.colors["gray-700"],
  },
  "text-gray-800": {
    color: theme.colors["gray-800"],
  },
  "text-gray-900": {
    color: theme.colors["gray-900"],
  },
  "text-primary": {
    color: theme.colors.primary,
  },
  "text-secondary": {
    color: theme.colors.secondary,
  },
  "opacity-0": {
    opacity: 0,
  },
  "opacity-25": {
    opacity: 0.25,
  },
  "opacity-50": {
    opacity: 0.5,
  },
  "opacity-75": {
    opacity: 0.75,
  },
  "opacity-100": {
    opacity: 1,
  },
  "border-0": {
    borderWidth: 0,
  },
  "border-2": {
    borderWidth: 2,
  },
  "border-4": {
    borderWidth: 4,
  },
  "border-8": {
    borderWidth: 8,
  },
  "border-t": {
    borderTopWidth: 1,
  },
  "border-t-0": {
    borderTopWidth: 0,
  },
  "border-t-2": {
    borderTopWidth: 2,
  },
  "border-t-4": {
    borderTopWidth: 4,
  },
  "border-t-8": {
    borderTopWidth: 8,
  },
  "border-b": {
    borderBottomWidth: 1,
  },
  "border-b-0": {
    borderBottomWidth: 0,
  },
  "border-b-2": {
    borderBottomWidth: 2,
  },
  "border-b-4": {
    borderBottomWidth: 4,
  },
  "border-b-8": {
    borderBottomWidth: 8,
  },
  "border-r": {
    borderRightWidth: 1,
  },
  "border-r-0": {
    borderRightWidth: 0,
  },
  "border-r-2": {
    borderRightWidth: 2,
  },
  "border-r-4": {
    borderRightWidth: 4,
  },
  "border-r-8": {
    borderRightWidth: 8,
  },
  "border-l": {
    borderLeftWidth: 1,
  },
  "border-l-0": {
    borderLeftWidth: 0,
  },
  "border-l-2": {
    borderLeftWidth: 2,
  },
  "border-l-4": {
    borderLeftWidth: 4,
  },
  "border-l-8": {
    borderLeftWidth: 8,
  },
  border: {
    borderWidth: 1,
  },
  "border-white": {
    borderColor: "white",
  },
  "border-danger": {
    borderColor: theme.colors.danger,
  },
  "border-success": {
    borderColor: theme.colors.success,
  },
  "border-gray-50": {
    borderColor: theme.colors["gray-50"],
  },
  "border-gray-100": {
    borderColor: theme.colors["gray-100"],
  },
  "border-gray-200": {
    borderColor: theme.colors["gray-200"],
  },
  "border-gray-300": {
    borderColor: theme.colors["gray-300"],
  },
  "border-gray-400": {
    borderColor: theme.colors["gray-400"],
  },
  "border-gray-500": {
    borderColor: theme.colors["gray-500"],
  },
  "border-gray-600": {
    borderColor: theme.colors["gray-600"],
  },
  "border-gray-700": {
    borderColor: theme.colors["gray-700"],
  },
  "border-gray-800": {
    borderColor: theme.colors["gray-800"],
  },
  "border-gray-900": {
    borderColor: theme.colors["gray-900"],
  },
  "border-primary": {
    borderColor: theme.colors.primary,
  },
  "border-secondary": {
    borderColor: theme.colors.secondary,
  },
  "border-transparent": {
    borderColor: "transparent",
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  "inset-0": {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  "bottom-0": {
    bottom: 0,
  },
  "left-0": {
    left: 0,
  },
  "right-0": {
    right: 0,
  },
  "top-0": {
    top: 0,
  },
  "z-0": {
    zIndex: 0,
    elevation: 0,
  },
  "z-10": {
    zIndex: 10,
    elevation: 2,
  },
  "z-20": {
    zIndex: 20,
    elevation: 4,
  },
  "z-30": {
    zIndex: 30,
    elevation: 6,
  },
  "z-40": {
    zIndex: 40,
    elevation: 8,
  },
  "z-50": {
    zIndex: 50,
    elevation: 10,
  },
  "text-3xl": {
    fontSize: theme.typography.sizes["3xl"],
  },
  "text-2xl": {
    fontSize: theme.typography.sizes["2xl"],
  },
  "text-xl": {
    fontSize: theme.typography.sizes.xl,
  },
  "text-lg": {
    fontSize: theme.typography.sizes.lg,
  },
  "text-base": {
    fontSize: theme.typography.sizes.base,
  },
  "text-sm": {
    fontSize: theme.typography.sizes.sm,
  },
  "text-xs": {
    fontSize: theme.typography.sizes.xs,
  },

  h1: {
    fontSize: theme.typography.sizes.h1,
    lineHeight: 44,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  h2: {
    fontSize: theme.typography.sizes.h2,
    lineHeight: 40,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  h3: {
    fontSize: theme.typography.sizes.h3,
    lineHeight: 34,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  h4: {
    fontSize: theme.typography.sizes.h4,
    lineHeight: 28,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  h5: {
    fontSize: theme.typography.sizes.h5,
    lineHeight: 22,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  h6: {
    fontSize: theme.typography.sizes.h6,
    lineHeight: 18,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  "font-bold": {
    fontWeight: "bold",
    // you might have to set fontFamily here as well to a bold font
  },
  "font-normal": {
    fontWeight: "normal",
  },
  "not-italic": {
    fontStyle: "normal",
  },
  italic: {
    fontStyle: "italic",
    // you might have to set fontFamily here as well to an italic font
  },

  "italic-bold": {
    fontStyle: "italic",
    fontWeight: "bold",
    // you might have to set fontFamily here as well to an italic/bold font
  },
  "h-full": {
    height: "100%",
  },
  "w-full": {
    width: "100%",
  },
  rounded: {
    borderRadius: 10,
  },
  "rounded-full": {
    borderRadius: 999,
  },
  "rounded-lg": {
    borderRadius: 50,
  },
  "rounded-md": {
    borderRadius: 25,
  },
  "rounded-none": {
    borderRadius: 0,
  },
  "rounded-sm": {
    borderRadius: 5,
  },
  "rounded-t": {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  "rounded-t-full": {
    borderTopStartRadius: 999,
    borderTopEndRadius: 999,
  },
  "rounded-t-lg": {
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  "rounded-t-md": {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  "rounded-t-none": {
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
  },
  "rounded-t-sm": {
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  "rounded-b": {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  "rounded-b-full": {
    borderBottomStartRadius: 999,
    borderBottomEndRadius: 999,
  },
  "rounded-b-lg": {
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  "rounded-b-md": {
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  "rounded-b-none": {
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  "rounded-b-sm": {
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  "rounded-tl-md": {
    borderTopStartRadius: 25,
  },
  "rounded-tr-md": {
    borderTopEndRadius: 25,
  },
  "shadow-xs": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
  },
  "shadow-sm": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  "shadow-md": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  "shadow-lg": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  "shadow-xl": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  "overflow-auto": {
    overflow: undefined,
  },
  "overflow-hidden": {
    overflow: "hidden",
  },
  "overflow-scroll": {
    overflow: "scroll",
  },
  "overflow-visible": {
    overflow: "visible",
  },
  "bg-warning": {
    backgroundColor: theme.colors.warning,
  },
  "text-warning": {
    color: theme.colors.warning,
  },
  "line-through": {
    textDecorationLine: "line-through",
  },
  underline: {
    textDecorationLine: "underline",
  },
  "no-underline": {
    textDecorationLine: "none",
  },
  "text-center": {
    textAlign: "center",
  },
  "text-left": {
    textAlign: "left",
  },
  "text-right": {
    textAlign: "right",
  },
  "text-justify": {
    textAlign: "justify",
  },
};

/**
 * A helper that converts an array of utility class names into inline styles.
 * @param utilities - An array of utility class names (strings). Also accepts falsy values to be filtered out
 */
export function applyStyleUtilities<
  T extends FlexStyle | TextStyle | ViewStyle
>(utilities: Util): T {
  return utilities?.filter(isTruthy).reduce((accumulator, utility) => {
    const currentUtility = SpacerSet.has(utility as Spacer)
      ? applySpacer(utility as Spacer) // handle spacers separately
      : utilityNameMap[utility as UtilityName];
    return { ...accumulator, ...currentUtility };
  }, {}) as T;
}

/**
 * A helper that converts a list of utility class names into inline styles.
 * @param utilities - A comma-separated list of utility class names
 */
export function util<T extends FlexStyle | TextStyle | ViewStyle>(
  ...utilities: Array<UtilityName | Spacer | Falsy>
): T {
  return applyStyleUtilities(utilities);
}
