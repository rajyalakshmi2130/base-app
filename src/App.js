import React from 'react'
import "./App.css"
import Header from "./Header";
import FoodList from "./FoodList";
import FoodCard from './FoodCard';




function App() {
  let foodData = [
    {foodName : "Biryani", thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdZcWBIc1UYdO7wmsCJIKd5eGX9EF6eEyXg&usqp=CAU"},
    {foodName :  "Maggiee",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdZcWBIc1UYdO7wmsCJIKd5eGX9EF6eEyXg&usqp=CAU"},
    {foodName : "Burgger",thumbnail:"https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="},
    {foodName : "Arisiyum paruppu",thumbnail:"https://cookingfromheart.com/wp-content/uploads/2015/08/2-2.jpg"},
    {foodName : "Gulab jamun",thumbnail:"https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800"}
  ]
 
  return (
    <div>
     <Header/>
     <FoodList/>
     {foodData.map( (food,i) => {
      return <FoodCard foodName = {food.foodName} foodImg ={food.thumbnail}/>

     })}

     {/*<div className='Food-card'>
      <img className='Food-thumbnail'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdZcWBIc1UYdO7wmsCJIKd5eGX9EF6eEyXg&usqp=CAU"/>
        <p>Biryani</p>
      
    </div>
     <div className='Food-card'>
      <img className='Food-thumbnail'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdZcWBIc1UYdO7wmsCJIKd5eGX9EF6eEyXg&usqp=CAU"/>
          <p>Maggiee</p>
        
       </div>
       <div className='Food-card'>
      <img className='Food-thumbnail'
          src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="/>
          <p>Bargger</p>
        
       </div>
       <div className='Food-card'>
      <img className='Food-thumbnail'
          src="https://cookingfromheart.com/wp-content/uploads/2015/08/2-2.jpg"/>
          <p>arisiyum paruppu</p>
        
       </div>
       <div className='Food-card'>
      <img className='Food-thumbnail'
          src="https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800"/>
          <p>gulab jamun</p>
        
  </div> */}

      
      
     </div>


      
  
)
}

export default App;
