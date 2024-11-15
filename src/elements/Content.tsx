// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { ChildProps, LightProps } from '@/types'

type Props =
  & LightProps
  & ChildProps
  & Record<string, unknown>

// Documentation:
// https://bulma.io/documentation/elements/content/

export function Content(props: Props) {
  return <LightPropHandler
    rootClassname='content'
    {...props}
  />
}
