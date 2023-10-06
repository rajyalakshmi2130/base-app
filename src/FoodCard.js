function FoodCard(props){
    return(
        <div className='food-card'>
      <img 
          className='food-thumbnail'
           src={props.foodImg}/>
        <p> {props.foodName}</p>
      
      
    </div>
    )
}
export default FoodCard;