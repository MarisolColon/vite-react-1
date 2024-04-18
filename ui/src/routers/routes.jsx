
import Layout from "../components/layout/Layout"
import Home from "../components/views/Home"
import Team from "../components/views/Team"

const routes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]

export default routes