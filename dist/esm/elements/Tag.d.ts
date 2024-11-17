// Copyright © 2024 Navarrotech

import type { LightProps, AsSize } from '@/types';
import type { ColorfulProps } from '@/utility/color';
import type { ReactNode } from 'react';
type AsChildren = {
    children: ReactNode;
    message?: never;
};
type AsMessage = {
    children?: never;
    message: string;
};
type WithDelete = {
    withDeleteButton: true;
    onDelete: () => void;
    isDelete?: never;
    disabled?: boolean;
};
type AsDelete = {
    isDelete: true;
    onDelete: () => void;
    disabled?: boolean;
    withDeleteButton?: never;
};
type WithoutDelete = {
    isDelete?: never;
    onDelete?: never;
    disabled?: never;
    withDeleteButton?: never;
};
type Props = LightProps & ColorfulProps & AsSize & (AsChildren | AsMessage) & (WithDelete | AsDelete | WithoutDelete) & {
    normal?: boolean;
    hoverable?: boolean;
    rounded?: boolean;
} & Record<string, unknown>;
export declare function Tag(props: Props): import("react/jsx-runtime").JSX.Element;
export {};