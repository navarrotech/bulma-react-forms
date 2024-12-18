// Copyright © 2024 Navarrotech

// Typescript
import type { ReactNode } from 'react'
import type { LightProps, IconDefinition, LanguageKeyOrText } from '@/types'

// UI
import { Delete } from './Delete'

// Misc
import { ColorfulProps, useColorful } from '@/utility/color'
import { useTranslation } from '@/utility/translation'

// This is a simple wrapper around the Bulma notification styles
// https://bulma.io/documentation/elements/notification/

type RequiredAsString = {
  message: LanguageKeyOrText
  children?: never
}

type RequiredAsChildren = {
  message?: never
  children: ReactNode
}

type WithDelete = {
  showDelete: boolean
  onDelete: () => void
}

type WithoutDelete = {
  showDelete?: never
  onDelete?: never
}

type Props =
  & LightProps
  & (RequiredAsString | RequiredAsChildren)
  & (WithDelete | WithoutDelete)
  & ColorfulProps
  & {
    // Required
    id: string // For good practice!

    // Optional settings:
    icon?: IconDefinition
  }
  & Record<string, unknown>

export function Notification(props: Props) {
  const { className, style, } = useColorful(props)
  const { translate, } = useTranslation()

  return <div
    { ...props }
    title={translate(props.title)}
    className={className}
    style={style}
  >
    { props.showDelete
      ? <Delete
        onClick={props.onDelete}
      />
      : <></>
    }
    { !props.icon
      ? <span className='icon mr-1'>{
        props.icon
      }</span>
      : <></>
    }
    { props.message
      ? <span>{ translate(props.message) }</span>
      : typeof props.children === 'string'
        ? <span>{ translate(props.children) }</span>
        : props.children
    }
  </div>
}
