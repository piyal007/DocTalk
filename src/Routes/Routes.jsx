import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import MyBookings from '../Pages/MyBookings';
import Blogs from '../Pages/Blogs';
import Contact from '../Pages/Contact';
import DoctorDetails from '../Pages/DoctorDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/doctor/:id',
        element: <DoctorDetails />
    },
    {
        path: '/my-bookings',
        element: <MyBookings />
    },
    {
        path: '/blogs',
        element: <Blogs />
    },
    {
        path: '/contact',
        element: <Contact />
    }
]);

export default router;