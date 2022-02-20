import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Banner = {
  render() {
    return /* html */ `
             <div class="swiper mt-10">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <img class="w-full" src="http://gendaiweb.com/wp-content/uploads/2021/06/gdw-35sfkkk.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                    <img class="w-full" src="https://minhduongads.com/wp-content/uploads/2020/01/mau-thiet-ke-banner-giai-phap-loc-nuoc-dep-minhduongmedia.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                    <img class="w-full" src="https://thuviennhadep.net/wp-content/uploads/banner-noi-that-9.jpg" alt="" />
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
        `;
  },
  afterRender() {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
export default Banner;
