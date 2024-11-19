// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps, ChildProps } from '@/types'

export type LevelItemProps =
  & LightProps
  & ChildProps
  & {
    centered?: boolean
  }
  & Record<string, unknown>

const levelItemPropsOmitted: string[] = [
  'centered',
] as const

export function LevelItem(props: LevelItemProps) {
  // Template, otherwise LightPropHandler will do this for you
  const classes = [
    props.className,
    props.centered && 'has-text-centered',
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='CHANGE_ME'
    className={classes}
    omit={levelItemPropsOmitted}
    as='div'
  >{
      props.children
    }</LightPropHandler>
}
