// Copyright © 2024 Navarrotech

import type { ReactNode, CSSProperties, MouseEventHandler } from 'react'
import type { AnyObjectSchema } from 'yup'
import type { Yup } from './utility/validators'

// Bulma
export type BulmaColor =
  | 'primary'
  | 'secondary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'
  | 'text'
  | 'ghost'
  | string

export type BulmaTextSizes =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7

// Why does typescript not already provide this?
export type InputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

// Common
export type SetTimeout = ReturnType<typeof setTimeout>
export type SetInterval = ReturnType<typeof setInterval>

// Language
export type LanguageKeyOrText = string
export type LanguageFunction = (keyOrText: LanguageKeyOrText) => string

// Generics
export type OptionalNever<T> = {
  [K in keyof T]?: T[K] | never
}

// Validators
export type ValidatorProp = ((yup: Yup) => AnyObjectSchema) | AnyObjectSchema | undefined

// Props
export type IconDefinition = string | ReactNode
export type ChildProps = {
  children: ReactNode
}

export type LightProps = {
  id?: string
  title?: LanguageKeyOrText
  className?: string
  style?: CSSProperties
}

export type StandardProps = LightProps & {
  onClick?: MouseEventHandler<HTMLElement>
  fullwidth?: boolean
  disabled?: boolean
}

// Utility
export type ColorfulType = {
  className: string
  style: CSSProperties
}

// Choices
type AsSmall = {
  small?: true
  medium?: never
  large?: never
}

type AsMedium = {
  small?: never
  medium?: true
  large?: never
}

type AsLarge = {
  small?: never
  medium?: never
  large?: true
}

export type AsSize = (AsSmall | AsMedium | AsLarge)

type AsLeft = {
  centered?: never
  left?: true // Left is default
  right?: never
}

type AsCentered = {
  centered: true
  left?: never
  right?: never
}

type AsRight = {
  centered?: never
  left?: never
  right: true
}

export type AsLeftCenteredRight = (AsLeft | AsCentered | AsRight)
