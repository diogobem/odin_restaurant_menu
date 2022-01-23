function createHome (){
 

    const container=document.createElement('div')
    container.classList.add('container')

    const descriptionText=document.createElement('span')
    descriptionText.classList.add('description_text')
    descriptionText.textContent='This is my restaurant. We serve excelent food since 2002.';

    const chefImage = document.createElement("img");
    chefImage.src = "Images/chef.jpg";
    chefImage.alt = "Chef";
    chefImage.width = "200";
    container.append(chefImage)
    container.append(descriptionText)
  
  
    return container
    }
    export default createHome

