import Home from '../views/pages/home';
import About from '../views/pages/about';
import Article from '../views/pages/article';
import ForumDiskusi from '../views/pages/forumDiskusi';
import detailArticle from '../views/pages/detailArticle';
import Login from '../views/pages/login';

const routes = {
  '/': Home, // default page
  '/about': About,
  '/article': Article,
  '/article/:id': detailArticle,
  '/diskusi': ForumDiskusi,
  '/login': Login

};
 
export default routes;
