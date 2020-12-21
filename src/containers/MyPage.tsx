import React, { FC } from 'react'
import useSWR from 'swr'
import Box from 'ui-box'
import Loading from 'components/Loading'
import { useParams } from "@reach/router"

interface Props {
  path: string
}

// interface Data {
//   data: Record<string, string>
// }

const MyPage: FC<Props> = () => {
  const params = useParams()
  const pageId = params?.pageId
  const { data } = useSWR(['data', pageId], () => fetch('/foo.json').then((res) => res.json()))

  return (
    <Box justifyContent="space-between" display="flex" flexDirection="row" width={300} height="200px">
      <Box>My page! {pageId}</Box>
      {data && pageId && <Box>{data.data[pageId] || "Not found"}</Box>}
      {!(data && pageId) && <Loading />}
    </Box>
  )
}

export default MyPage
