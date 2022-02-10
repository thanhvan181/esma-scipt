import { getAll } from "../api/categoryapi";

const Categories = {
  async render() {
    const {data} = await getAll();
    return /* html */ `
          <div class="container py-16">
      <h2 class="mb-6 text-3xl font-medium uppercase text-gray-800">
        Shop by categoty
      </h2>
      <div class="gap-3 grid grid-cols-3">
      ${data.map((cate) =>{
        return /* html */ `
         <div class="group relative overflow-hidden rounded-sm">
          <img
            src="./src/images/bestsellig-furniture-kitchen.jpg"
            alt=""
            class="w-full"
          />
          <a
            href=""
            class="font-roboto absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-xl font-medium text-white transition group-hover:bg-opacity-60"
            >${cate.title}</a
          >
        </div>
        `;
      }).join("")}

       
       
      </div>
    </div>


        `;
  },
};
export default Categories;
