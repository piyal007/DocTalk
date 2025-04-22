import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import MyBookings from '../Pages/MyBookings';
import Blogs from '../Pages/Blogs';
import Contact from '../Pages/Contact';
import DoctorDetails from '../Pages/DoctorDetails';
import Error from '../Pages/Error';
import MainLayout from '../Components/Layout/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <p>error</p>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/doctor/:id',
                Component: DoctorDetails
            },
            {
                path: '/my-bookings',
                Component: MyBookings
            },
            {
                path: '/blogs',
                Component: Blogs
            }
        ]
    },
    {
        path: '*',
        Component: Error
    }
]);

export default router;