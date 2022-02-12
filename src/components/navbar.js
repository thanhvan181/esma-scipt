const Navbar = {
    render() {
        return /* html */ `
           <nav class="bg-gray-800">
    <div class="container flex">
      <div class="bg-primary relative flex cursor-pointer items-center px-8 py-4 group">
        <span class="text-white"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg></span>
        <span class="ml-2 capitalize text-white"> All Categories </span>
        <div
          class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
          <a href="" class="flex items-center px-6 py-3 transition hover:bg-gray-100">
            <span class="ml-6 text-sm text-gray-600">Male</span>
          </a>
          <a href="" class="flex items-center px-6 py-3 transition hover:bg-gray-100">
            <span class="ml-6 text-sm text-gray-600">Female</span>
          </a>
          <a href="" class="flex items-center px-6 py-3 transition hover:bg-gray-100">
            <span class="ml-6 text-sm text-gray-600">Boy</span>
          </a>
          <a href="" class="flex items-center px-6 py-3 transition hover:bg-gray-100">
            <span class="ml-6 text-sm text-gray-600">Girls</span>
          </a>
          <a href="" class="flex items-center px-6 py-3 transition hover:bg-gray-100">
            <span class="ml-6 text-sm text-gray-600">Outdoor</span>
          </a>
          <a href="" class="flex items-center px-6 py-3 transition hover:bg-gray-100">
            <span class="ml-6 text-sm text-gray-600">Outlets</span>
          </a>

         
        </div>
      </div>

      <div class="flex flex-grow items-center justify-between pl-12">
        <div class="flex items-center space-x-6 capitalize">
          <a href="/" class="text-gray-200 transition hover:text-white">Home</a>
          <a href="/shop" class="text-gray-200 transition hover:text-white">Shop</a>
          <a href="" class="text-gray-200 transition hover:text-white">Woment's</a>
          <a href="" class="text-gray-200 transition hover:text-white">Ment</a>
          <a href="" class="text-gray-200 transition hover:text-white">About Us</a>
          <a href="" class="text-gray-200 transition hover:text-white">Contact Us</a>
          <a href="/admin/dashboard" class="text-gray-200 transition hover:text-white">Admin</a>
        </div>
        <a href="/signup" class="text-gray-200 transition hover:text-white">Login/Register
        </a>
      </div>
    </div>
  </nav>


        `;
    }
}
export default Navbar