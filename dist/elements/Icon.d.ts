/* Copyright © 2024 Navarrotech */
import { BulmaColor, IconDefinition, LightProps, AsSize } from '../types';
type Props = LightProps & AsSize & {
    color?: BulmaColor;
    children: IconDefinition;
} & Record<string, unknown>;
export declare function Icon(props: Props): import("react/jsx-runtime").JSX.Element;
export {};