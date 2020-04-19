import Home from "./pages/home/HomeContainer";
import DetailCourse from "./pages/detailCourse/DetailCourseContainer";
import LoginContainer from "./pages/login/LoginContainer";
import RegisterContainer from "./pages/register/RegisterContainer";

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
  {
    path: "/register/",
    exact: true,
    components: RegisterContainer,
  },
];
export default RoutesList;
