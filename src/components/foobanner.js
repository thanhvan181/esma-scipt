
const FooBaner = {
    render() {
        console.log("footerbanner");
        return /* html */ `
         <div class="container pb-16">
    <div class="bg-cover bg-no-repeat bg-center py-36" style="background-image: url('./src/images/bannernoithat.jpeg');">
        <div class="container">

          <div class="mt-12">
            <a href="" class="bg-primary border border-primary text-white px-8 py-3 ml-12 font-medium rounded-md hover:bg-transparent hover:text-primary transiton ">Shop Now</a>
          </div>
        </div>

    </div>
  </div>


        `;
    }
  
};
export default FooBaner;
