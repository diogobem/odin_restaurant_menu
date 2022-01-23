function createMenu (){

    const container=document.createElement('div')
    container.classList.add('container')

    const descriptionText=document.createElement('span')
    descriptionText.classList.add('description_text')
    descriptionText.textContent='This is my Menu';

    const chefImage = document.createElement("img");
    chefImage.src = "Images/chef.jpg";
    chefImage.alt = "Chef";
    chefImage.width = "200";
 
    container.append(chefImage)
    container.append(descriptionText)
  
  
    return container
    }
    export default createMenu

