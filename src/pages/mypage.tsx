import React from 'react'
import MyPage from 'containers/MyPage'

const isServer = typeof window === 'undefined'

export default () => {
  return <MyPage path={isServer ? '/mypage' : new URL(window.location.href).pathname} />
}
