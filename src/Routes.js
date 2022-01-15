import { useRoutes } from "react-router-dom";
import ClientLayout from "./resources/layouts/ClientLayout";

import HomeView from "./resources/views/HomeView";
import BlogListView from "./resources/views/blog/BlogListView";
import BlogDetailView from "./resources/views/blog/BlogDetailView";
import ContactView from "./resources/views/ContactView";
import AboutView from "./resources/views/AboutView";
import PartnerView from "./resources/views/PartnerView";
import TermsPrivacyView from "./resources/views/TermsPrivacyView";
import ItemFilterView from "./resources/views/item/ItemFilterView";
import ItemDetailView from "./resources/views/item/ItemDetailView";

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
          ]
        },

        { path: 'booking/:item', element: <HomeView /> },

        {
          path: 'blog',
          children: [
            { path: '', element: <BlogListView /> },
            { path: ':slug', element: <BlogDetailView /> },
          ]
        },

        { path: 'contact', element: <ContactView /> },
        { path: 'about', element: <AboutView /> },
        { path: 'partner', element: <PartnerView /> },
        { path: 'terms-privacy', element: <TermsPrivacyView /> },
      ]
    },
  ]);
}

export default Routes;
