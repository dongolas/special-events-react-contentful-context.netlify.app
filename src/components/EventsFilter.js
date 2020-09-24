import React from 'react'
import {useContext} from 'react'
import {EventContext} from '../context'
import Title from "../components/Title"

export default function EventsFilter() {
  const context = useContext(EventContext)
  return (
    <div>
      Hello from filters
    </div>
  )
}
