export const reRender = async (component, domElement) => {
  if (component) {
    document.querySelector(domElement).innerHTML = await component.render();
  }
  if (component.afterRender) await component.afterRender();
};

// export const useParams = () => {
//   const url = window.location.hash.toLocaleLowerCase();
//   // console.log(url);
//   const request = url.split("/");
//   // console.log(request);
//   return {
//     resource: request[1],
//     id: request[2],
//     action: request[3],
//   };
// };
