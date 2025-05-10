
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, ArrowRight, Search, Tag } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  thumbnail: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const { ref: refHero, isVisible: isVisibleHero } = useScrollAnimation();
  const { ref: refPosts, isVisible: isVisiblePosts } = useScrollAnimation({ threshold: 0.1 });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "10 Tax Deductions Most Small Business Owners Miss",
      excerpt: "Discover the often-overlooked tax deductions that could save your small business thousands of dollars each year.",
      category: "Business Tax",
      date: "May 1, 2023",
      readTime: "8 min read",
      author: {
        name: "David Anderson",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["small business", "deductions", "tax planning"]
    },
    {
      id: "2",
      title: "The Ultimate Guide to Tax-Efficient Investment Strategies",
      excerpt: "Learn how to structure your investments to minimize tax burden and maximize after-tax returns in any market condition.",
      category: "Investment Tax",
      date: "April 15, 2023",
      readTime: "12 min read",
      author: {
        name: "Amanda Lewis",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["investments", "tax strategy", "financial planning"]
    },
    {
      id: "3",
      title: "Estate Planning Mistakes to Avoid: Protecting Your Legacy",
      excerpt: "Common pitfalls in estate planning and how to ensure your assets are protected and distributed according to your wishes.",
      category: "Estate Planning",
      date: "March 22, 2023",
      readTime: "10 min read",
      author: {
        name: "Robert Chen",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1621953856258-9e56267bb215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["estate planning", "wealth transfer", "legacy"]
    },
    {
      id: "4",
      title: "Tax Law Changes in 2023: What You Need to Know",
      excerpt: "A comprehensive breakdown of the latest tax law changes and how they might impact your personal and business finances.",
      category: "Tax Updates",
      date: "February 8, 2023",
      readTime: "9 min read",
      author: {
        name: "Jessica Martinez",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      tags: ["tax law", "2023 updates", "financial planning"]
    },
    {
      id: "5",
      title: "Retirement Planning: Tax-Smart Strategies for Every Age",
      excerpt: "How to optimize your retirement savings and withdrawals for maximum tax efficiency throughout your life stages.",
      category: "Personal Tax",
      date: "January 15, 2023",
      readTime: "11 min read",
      author: {
        name: "David Anderson",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1559519529-0936e4058364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["retirement", "tax planning", "financial goals"]
    },
    {
      id: "6",
      title: "Digital Nomad? Here's How to Handle Your Taxes",
      excerpt: "Tax considerations for remote workers and digital nomads who work across multiple states or countries.",
      category: "Personal Tax",
      date: "December 5, 2022",
      readTime: "7 min read",
      author: {
        name: "Amanda Lewis",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["remote work", "digital nomad", "international tax"]
    }
  ];
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={refHero as React.RefObject<HTMLDivElement>}
        className={`py-20 bg-primary text-white transition-opacity duration-1000 ${isVisibleHero ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tax Insights Blog</h1>
            <p className="text-xl text-gray-200 mb-8">
              Stay informed with the latest tax strategies, tips, and updates to make smarter financial decisions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section 
        ref={refPosts as React.RefObject<HTMLDivElement>}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className={`mb-12 transition-all duration-700 delay-100 ${isVisiblePosts ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:max-w-md relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={`transition-all duration-700 transform ${isVisiblePosts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index % 3) * 150}ms` }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-accent transition-colors">
                        <Link to={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600 flex items-center"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
          
          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button variant="outline" className="mr-2">1</Button>
              <Button className="mr-2">2</Button>
              <Button variant="outline" className="mr-2">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">Stay updated with the latest tax strategies and insights delivered directly to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input placeholder="Your email address" type="email" className="flex-grow" />
                <Button>
                  Subscribe <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
