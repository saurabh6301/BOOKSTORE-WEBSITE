const posts = [
  {
    "id": 1,
    "title": "Bala Ji Publication",
    "href": "#",
    "description": "Specialized in religious books and customized Panchang Calenders, Shri Balaji Prakashan excels in well-researched and detailed information with assured quality products.",
    "bookImage":"Bala.jpg",
    "date": "2019",
    "datetime": "2019-10-31",
    "category": {
    "title": "Mathematices",
    "href": "#"
    },
    "author": {
    "name": "Pankaj Joshi",
    "role": "Author",
    "href": "#",
    "imageUrl": "Pankaj.jpg"
    },
    "price": 15.99,
    "rating": 4.5
    },
    {
    "id": 2,
    "title": "Kumar Mittal Publication",
    "href": "#",
    "description": "Kumar Mittal Publication is a renowned publishing house in India, specializing in academic and educational books.",
    "bookImage":"Mittle.jpg",
    "date": "1995",
    "datetime": "1995-07-11",
    "category": {
    "title": "Science",
    "href": "#"
    },
    "author": {
    "name": "Dr A K Sharma",
    "role": "Author",
    "href": "#",
    "imageUrl": "A K.jpg"
    },
    "price": 12.99,
    "rating": 4.8
},
{
  "id": 3,
  "title": "Excellent English Grammar And Composition",
  "href": "#",
  "description": "'Excellent English' is a comprehensive English language book designed for students, professionals, and anyone seeking to improve their language skills.",
  "bookImage":"Excellent.jpg",
  "date": "2009",
  "datetime": "1949-06-08",
  "category": {
  "title": "General English",
  "href": "#"
  },
  "author": {
  "name": " H. S Bhatia",
  "role": "Author",
  "href": "#",
  "imageUrl": "H S.jpg"
  },
  "price": 10.99,
  "rating": 4.2
  }
  ]
  

    
  // More posts...

export default function Example() {
  return (
    <div>
        <div>
        <h1 className="text-6xl font-serif text-gray-900 sm:text-2xl text-center border-b-4 border-double border-yellow-200 bg-slate-50 mt-5">Blog</h1>
        </div>
        <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Uncover the world, one page at a time.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="pb-5 ">
                    <img className="shadow-md" src={post.bookImage}></img>
                </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
