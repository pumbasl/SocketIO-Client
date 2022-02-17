import { BrowserRouter, Routes, Route } from "react-router-dom";
// стили
import { Container } from 'react-bootstrap'

//pages
import Main from './pages/Main/Main';
import VideoRoom from './pages/VideoRoom/VideoRoom';
import RoomNotFound from './pages/RoomNotFound/RoomNotFound';


// маршруты
const routes = [
  { path: '/', name: 'Main', Component: Main },
  { path: '/room/:roomId', name: 'VideoRoom', Component: VideoRoom },
  { path: '/roomNotFound', name: 'RoomNotFound', Component: RoomNotFound }
];


export const App = () => (
  <BrowserRouter>
    <Container fluid='lg'>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact element={<Component />} />
        ))}
      </Routes>
    </Container>
  </BrowserRouter>
)