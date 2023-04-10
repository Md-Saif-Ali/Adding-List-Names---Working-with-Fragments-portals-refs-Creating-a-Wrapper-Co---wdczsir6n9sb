import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({names}) =>{
  return(
    
 
    <div>

      {names.map((e) => (
        <ListItems valuex={e} />
      ))}

      
    </div>
    
  
  )
}

export default List;
