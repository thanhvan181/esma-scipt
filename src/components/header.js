const Header = {
    render() {
        return /* html */ `
        <header class="bg-white py-4 shadow-sm">
      <div class="container flex items-center justify-between">
        <a href="" class="grid grid-cols-2">
          <img src="./src/images/logo.png" alt="" class="w-20 h-20" />
          <span class="pt-8 ">FPT Polytechnic</span>
         

        </a>
        <div class="relative flex w-full max-w-xl">
          <span class="absolute left-4 top-3 text-lg text-gray-400">
            <i class="fas fa-Search"></i>
          </span>
          <input
            type="text"
            class="border-primary rounded-1-md w-full border border-r-0 py-3 pl-12 pr-3 focus:outline-none"
            placeholder="search"
          />
          <button
            class="bg-primary border-primary hover:text-primary rounded-r-md border px-8 text-white transition hover:bg-transparent"
          >
            Search
          </button>
        </div>
        <div class="flex items-center space-x-6">
          <a
            href=""
            class="hover:text-primary relative text-center text-gray-700 transition"
          >
            <div class="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div class="text-xs leading-3">Wish list</div>
            <span
              class="bg-primary absolute right-0 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
              >8</span
            >
          </a>
           <a
            href=""
            class="hover:text-primary relative text-center text-gray-700 transition"
          >
            <div class="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div class="text-xl leading-3">Cart</div>
            <span
              class="bg-primary absolute right-0 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
              >8</span
            >
          </a>
         
         

          <a
            href=""
            class="hover:text-primary relative text-center text-gray-700 transition"
          >
            <div class="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div class="text-xs leading-3">Account</div>
          
            
          </a>
        </div>
      </div>
    </header>

        
        `;
    }

}
export default Header;