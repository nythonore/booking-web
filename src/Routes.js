import { useRoutes } from 'react-router-dom';

import ClientLayout from './resources/layouts/ClientLayout';
import AccountLayout from './resources/layouts/AccountLayout';

import HomeView from './resources/views/HomeView';
import BlogListView from './resources/views/blog/BlogListView';
import BlogDetailView from './resources/views/blog/BlogDetailView';
import ContactView from './resources/views/ContactView';
import AboutView from './resources/views/AboutView';
import PartnerView from './resources/views/PartnerView';
import TermsPrivacyView from './resources/views/TermsPrivacyView';
import ItemFilterView from './resources/views/item/ItemFilterView';
import ItemDetailView from './resources/views/item/ItemDetailView';

import BookingListView from './resources/views/account/booking/BookingListView';
import BookingHistoryview from './resources/views/account/booking/BookingHistoryview';
import BookingManageView from './resources/views/account/booking/BookingManageView';
import AccountBlogListView from './resources/views/account/blog/BlogListView';
import BlogManageView from './resources/views/account/blog/BlogManageView';
import ChangePasswordView from './resources/views/account/user/ChangePasswordView';
import ProfileView from './resources/views/account/user/ProfileView';

const Routes = () => {
	return useRoutes([
		{
			element: <ClientLayout />,
			children: [
				{ index: true, path: '/', element: <HomeView /> },
				{
					path: ':category',
					children: [
						{ path: '', element: <ItemFilterView /> },
						{ path: ':slug', element: <ItemDetailView /> },
					],
				},

				{ path: 'booking/:item', element: <HomeView /> },

				{
					path: 'blog',
					children: [
						{ path: '', element: <BlogListView /> },
						{ path: ':slug', element: <BlogDetailView /> },
					],
				},

				{ path: 'contact', element: <ContactView /> },
				{ path: 'about', element: <AboutView /> },
				{ path: 'partner', element: <PartnerView /> },
				{ path: 'terms-privacy', element: <TermsPrivacyView /> },
			],
		},

		{
			path: 'account',
			element: <AccountLayout />,
			children: [
				{ index: true, path: 'dashboard', element: <h2>Dashboard</h2> },

				{
					path: 'booking',
					children: [
						{ path: 'history', element: <BookingHistoryview /> },
						{ path: ':category', element: <BookingListView /> },
						{
							path: ':category/create',
							element: <BookingManageView type='add' />,
						},
						{
							path: ':category/edit/:slug',
							element: <BookingManageView type='edit' />,
						},
					],
				},

				{
					path: 'blog',
					children: [
						{ path: '', element: <AccountBlogListView /> },
						{ path: 'create', element: <BlogManageView type='add' /> },
						{
							path: 'edit/:slug',
							element: <BlogManageView type='edit' />,
						},
					],
				},
				{ path: 'customer', element: <h2>Customer</h2> },
				{ path: 'maillist', element: <h2>MailList</h2> },

				{ path: 'profile', element: <ProfileView /> },
				{ path: 'password/change', element: <ChangePasswordView /> },
			],
		},
	]);
};

export default Routes;
