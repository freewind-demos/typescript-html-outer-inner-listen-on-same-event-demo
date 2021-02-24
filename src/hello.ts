const outer = document.querySelector<HTMLDivElement>('#outer')!;
const inner = document.querySelector<HTMLDivElement>('#inner')!;

outer.addEventListener('click', (event) => {
  console.log("### click on outer", event)
},/* true */)

inner.addEventListener('click', (event) => {
  console.log("### click on inner", event)
}, /* true */)
