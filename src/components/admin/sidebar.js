const sideBar = {
    render() {
        return /* html */ `
        <aside class="py-6 px-10 w-64 border-r border-gray-200">
      <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" alt="" class="w-28" />
      <ul v-for="group in sidebar" class="flex flex-col gap-y-6 pt-20">
        <li v-for="item in group" class="inline-grid grid-cols-2">
     
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>
        
          <a
            href="#"
            class="flex gap-x-2 items-center py-2  text-gray-500 hover:text-indigo-600 group"
          >
          DASHBOARD
           
         
          </a>
        </li>
        <li v-for="item in group"  class="inline-grid grid-cols-2">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
</svg>
          <a
            href="#"
            class="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
          >
          INFORMATION
           
         
          </a>
        </li>
        <li v-for="item in group"  class="inline-grid grid-cols-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500 " viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
          <a
            href="#"
            class="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
          >
          USER
           
         
          </a>
        </li>
        <li v-for="item in group"  class="inline-grid grid-cols-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
          <a
            href="/admin/products"
            class="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
          >
          PRODUCT
           
         
          </a>
        </li>
        <li v-for="item in group"  class="inline-grid grid-cols-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>
          <a
            href="#"
            class="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
          >
         CATEGORY
           
         

          </a>
        </li>
        <li v-for="item in group" class="inline-grid grid-cols-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>
          <a
            href="#"
            class="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
          >
          ORDER
           
         
          </a>
        </li>
        <li v-for="item in group" class="inline-grid grid-cols-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
    </svg>
          <a
            href="#"
            class="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
          >
         CONTACT
           
         
          </a>
        </li>
         <li v-for="item in group" class="inline-grid grid-cols-2">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-blue-500" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
</svg>
          <a
            href="#"
            class="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
          >
          BLOG
           
         
          </a>
        </li>
      </ul>
    </aside>


        `;
    }
}
export default sideBar;