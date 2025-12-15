import { useState } from 'react';
import { FiCalendar, FiUser, FiMessageCircle, FiArrowRight, FiSearch } from 'react-icons/fi';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = {
    title: "The Future of E-Commerce: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping the future of online shopping and how businesses are adapting to meet changing consumer expectations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    author: "Sarah Johnson",
    date: "Dec 10, 2024",
    comments: 24,
    category: "E-Commerce",
  };

  const posts = [
    {
      title: "10 Tips for Better Product Photography",
      excerpt: "Learn how to take stunning product photos that convert visitors into buyers.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      author: "Mike Wilson",
      date: "Dec 8, 2024",
      comments: 15,
      category: "Marketing",
    },
    {
      title: "Building Customer Loyalty in the Digital Age",
      excerpt: "Strategies to keep your customers coming back for more.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400",
      author: "Emily Chen",
      date: "Dec 5, 2024",
      comments: 32,
      category: "Business",
    },
    {
      title: "Sustainable Shopping: A Growing Trend",
      excerpt: "How eco-friendly products are changing consumer behavior.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400",
      author: "David Brown",
      date: "Dec 3, 2024",
      comments: 18,
      category: "Trends",
    },
    {
      title: "The Psychology of Online Shopping",
      excerpt: "Understanding what drives customers to click 'Buy Now'.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400",
      author: "Lisa Taylor",
      date: "Nov 28, 2024",
      comments: 27,
      category: "Psychology",
    },
    {
      title: "Mobile Commerce: Optimizing for Small Screens",
      excerpt: "Essential tips for creating a mobile-friendly shopping experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      author: "James Lee",
      date: "Nov 25, 2024",
      comments: 21,
      category: "Technology",
    },
    {
      title: "Holiday Shopping Guide 2024",
      excerpt: "Get ready for the biggest shopping season of the year.",
      image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400",
      author: "Anna Williams",
      date: "Nov 20, 2024",
      comments: 45,
      category: "Shopping",
    },
  ];

  const categories = [
    { name: "E-Commerce", count: 12 },
    { name: "Marketing", count: 8 },
    { name: "Business", count: 15 },
    { name: "Trends", count: 6 },
    { name: "Technology", count: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="gradient-text animate-fadeInUp">Our Blog</h1>
        <div className="breadcrumb animate-fadeInUp delay-200">
          <a href="/">Home</a>
          <span>/</span>
          <span>Blog</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="card overflow-hidden mb-12 animate-fadeInUp">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="badge mb-4 w-fit">{featuredPost.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-green-600 transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-2">
                  <FiUser /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <FiCalendar /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <FiMessageCircle /> {featuredPost.comments} Comments
                </span>
              </div>
              <button className="btn-primary w-fit flex items-center gap-2">
                Read More <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <main className="flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="card overflow-hidden stagger-item group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="badge absolute top-4 left-4">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMessageCircle /> {post.comments}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <a href="#" className="text-green-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                      Read More <FiArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              {[1, 2, 3].map(page => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${page === 1 ? 'gradient-bg text-white' : 'bg-white hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8 animate-fadeInRight">
            {/* Search */}
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input pr-12"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-sm text-gray-400">({cat.count})</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Shopping', 'Fashion', 'Tech', 'Trends', 'Business', 'Tips', 'Guide', 'News'].map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:gradient-bg hover:text-white transition-all"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;