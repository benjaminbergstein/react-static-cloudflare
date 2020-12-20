import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import MyPage from 'containers/MyPage'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['mypage'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mypage/1">My page1</Link>
        <Link to="/mypage/2">mypages 2</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <MyPage path="/mypage/:pageId" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
