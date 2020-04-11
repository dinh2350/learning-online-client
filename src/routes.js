import Home from "./pages/home/HomeContainer";
import DetailCourse from "./pages/detailCourse/DetailCourseContainer";
import LoginContainer from "./pages/login/LoginContainer";

const RoutesList = [
  {
    path: "/",
    exact: true,
    components: Home,
  },
  {
    path: "/course/:coursecode/",
    exact: true,
    components: DetailCourse,
  },
  {
    path: "/login/",
    exact: true,
    components: LoginContainer,
  },
];
export default RoutesList;
