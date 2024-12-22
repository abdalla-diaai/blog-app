import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AddBlogPage from './pages/AddBlogPage';
import PageNotFound from './pages/PageNotFound';
import DetailPage from './pages/DetailPage';
import EditBlogPage from './pages/EditBlogPage';
import axios from "axios";
import { toast } from 'react-toastify';



function App() {

  const createBlog = async (data) => {
    axios.post('http://127.0.0.1:8000/blogs/', data)
    .then(res => {
      console.log(res.data)
      toast('Blog created successfully!')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const updateBlog = async (slug, data) => {
    axios.put(`http://127.0.0.1:8000/blogs/${slug}/`, data)
    .then(res => {
      console.log(res.data)
      toast('Blog updated successfully!')
    })
    .catch(err => {
      console.log(err)
    });
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/add-blog' element={<AddBlogPage createBlog={createBlog} />}/>
      {/* add : before variable to make it dynamic */}
      <Route path='/blogs/:slug' element={<DetailPage />}/>
      <Route path='/blogs/edit/:slug' element={<EditBlogPage updateBlog={ updateBlog }/>}/>
      <Route path='*' element={<PageNotFound />}/>
    </Route>


  ))

  return (
    <RouterProvider router={router} />  
  );
};

export default App;
