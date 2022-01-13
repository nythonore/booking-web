import Blog from "../../components/client/Blog";

const BlogListView = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <p className="font-sz-large font-wg-700">Latest's Blog</p>
        <div className="mt-2"><p className="title-line"></p></div>

        <div className="row">
          {
            [1, 2, 3, 4].map((_, key) => (
              <div key={key} className="col-md-6 mt-5">
                <Blog />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default BlogListView;
