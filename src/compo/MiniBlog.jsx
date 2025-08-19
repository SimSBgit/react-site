import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './compo-blog/pages/MainPage'
import PostWritePage from './compo-blog/pages/PostWritePage';
import PostViewPage from './compo-blog/pages/PostViewPage';
import styled from 'styled-components';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

function MiniBlog() {
  return (
    <>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path='post-write'
          element={<PostWritePage />}
        />
        <Route
          path='post/:postId'
          element={<PostViewPage />}
        />
      </Routes>
    </>
  )
}

export default MiniBlog
