import React, {useState} from 'react'
import Modal from "../Modal"



function PhotoList({category}) {
    
    const [photos] = useState([
        {
          name: 'Grocery aisle',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Grocery booth',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Building exterior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Restaurant table',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cafe interior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cat green eyes',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green parrot',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Yellow macaw',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pug smile',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pancakes',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burrito',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Scallop pasta',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burger',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Fruit bowl',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green river',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Docks',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Panoramic village by sea',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Domestic landscape',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Park bench',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
      ]);
      const [isModalVisible, setModalVisibility] = useState(false);
      const [currentPhoto, setCurrentPhoto] = useState({src:"", description:"", name:"", category:"", index:1})

      const currentPhotos = photos.filter((photo) => photo.category === category);

      function openModal(image, i){
        setModalVisibility(true);
        setCurrentPhoto({...image,index:i });

      }

      function closeModal(){
        setModalVisibility(false);

      }
  return (
    <div className="flex-row">

      {currentPhotos.map((image, i) => (
     
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={i}
            onClick={() => openModal(image, i)}
          />

       
        ))}
        {isModalVisible && <Modal closeModal={closeModal}  {...currentPhoto}></Modal>}

        
    </div>
  )
}

export default PhotoList;