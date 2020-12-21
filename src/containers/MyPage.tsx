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

  const pageData = data?.data[pageId]

  return (
    <Box display="flex" flexDirection="column">
      <Box>This is a page with ID &quot;{pageId}&quot;</Box>
      {data && pageData && <Box marginTop={20}>Data associated with this page: {pageData}</Box>}
      {data && !pageData && <Box marginTop={20}>This page has no data associated with it.</Box>}
      {!(data && pageId) && <Loading />}
    </Box>
  )
}

export default MyPage
