import Home from "./pages/home/HomeContainer";
import DetailCourse from "./pages/detailCourse/DetailCourseContainer";
const RoutesList = [
  {
    path: "/",
    exact: true,
    components: Home
  },
  {
    path: "/detailCourse/",
    exact: true,
    components: DetailCourse
  }
];
export default RoutesList;
