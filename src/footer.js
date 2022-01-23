function createFooter (){
const footer = document.createElement('div')
footer.classList.add('footer')
const footerSpan=document.createElement('span')
footerSpan.textContent='MyRestaurant - All rights reserved - 2022'
footer.append(footerSpan)
return footer
}
export default createFooter