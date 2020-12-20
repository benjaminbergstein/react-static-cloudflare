import React from 'react'
import useSWR from 'swr'

export default () => {
  const { data }: { data?: { data: string }} = useSWR('data', () => fetch('/foo.json').then((res) => res.json()))

  if (!data) return <div>Loading</div>

  return (
    <div>
      {data.data}
    </div>
  )
}
