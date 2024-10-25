const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function About() {
    return (
        <div >
            <div>
                <h1 className="text-6xl font-serif text-gray-900 sm:text-2xl text-center border-b-4 border-double border-yellow-200 bg-slate-50 mt-5">About Me</h1>
            </div>
            <div className="relative isolate overflow-hidded py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between flex-col lg:flex-row space-y-10 lg:space-y-0">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold  text-gray-900 sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg  text-gray-800">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
              <span>Your Haven for Knowledge and Imagination</span>
              <span>
              [Bookstore Name] is a treasure trove of books, where readers can lose themselves in the world of words. Our mission is to provide a curated selection of titles that cater to diverse tastes and interests, fostering a love for reading and learning.
              </span>
            </p>
          </div>
          <div className="shadow-md">
            <img src="BookShop.jpg"></img>
          </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
                  <dd className="text-2xl font-bold  text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
        </div>
      
    )
  }
  