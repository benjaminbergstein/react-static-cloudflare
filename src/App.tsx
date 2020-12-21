import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import Loading from 'components/Loading'
import MyPage from 'containers/MyPage'
import Box from 'ui-box'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['mypage'])

function App() {
  return (
    <Root>
      <Box fontFamily='"Helvetica Neue", sans-serif'>
        <Box is="nav" display="flex" flexDirection="column" padding={20} border="1px solid #ccc">
          <Link to="/">
            <Box padding={5}>
              Home
            </Box>
          </Link>
          <Link to="/mypage/1">
            <Box padding={5}>
              My page (1)
            </Box>
          </Link>
          <Link to="/mypage/2">
            <Box padding={5}>
              My page (2)
            </Box>
          </Link>
        </Box>
        <Box marginTop={20} is="nav" display="flex" flexDirection="column" padding={20} border="1px solid #ccc">
          <React.Suspense fallback={<Loading />}>
            <Router>
              <MyPage path="/mypage/:pageId" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </Box>
      </Box>
    </Root>
  )
}

export default App
