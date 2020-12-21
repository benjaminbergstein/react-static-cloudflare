import React, { FC } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const pulse = keyframes`
  0% {
    background: #aaa;
  }

  100% {
    background: #ddd;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

const LoadingComponent = styled.div<{ delay: number }>`
  animation: ${pulse} 0.6s ease-in-out ${({ delay }) => delay.toString()}s infinite alternate;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  border-radius: 15px;
`

const Loading: FC<unknown> = () => <Wrapper>
  <LoadingComponent delay={-0.4} />
  <LoadingComponent delay={-0.2} />
  <LoadingComponent delay={0} />
</Wrapper>

export default Loading
