import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { data } from "./data";
import { Nav } from "./components/Nav";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout>
        <Sider>
          <Nav />
        </Sider>
        <Content>
          <Routes>
            {
              data.map((obj, id) => {
                return (
                  <Route key={id} path={obj.route} element={<obj.element />} />
                )
              })
            }
          </Routes>
        </Content>


      </Layout>
    </Router>
  );
}

export default App;
