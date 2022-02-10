const Features = {
    render() {
        return /* html */ `
         <div class="container py-16">
    <div class="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
      <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <img src="./src//images//shipping.jpeg" alt="" class="w-12 h-12 object-contain">
        <div>
          <h4 class="font-medium capitalize text-lg ">Free shopping</h4>
          <p class="text-gray-500 text-sm">Order over 200.000VND</p>
        </div>

      </div>
       <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <img src="./src/images/money.jpeg" alt="" class="w-12 h-12 object-contain">
        <div>
          <h4 class="font-medium capitalize text-lg ">Money Returns</h4>
          <p class="text-gray-500 text-sm">Order over 200.000VND</p>
        </div>

      </div>
       <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <img src="./src/images/24.png" alt="" class="w-12 h-12 object-contain">
        <div>
          <h4 class="font-medium capitalize text-lg ">24/24 shipping</h4>
          <p class="text-gray-500 text-sm">Order over 200.000VND</p>
        </div>

      </div>

    </div>
  </div>


        `;
    }
}
export default Features