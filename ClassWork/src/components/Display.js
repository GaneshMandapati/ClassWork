import React from 'react';
import './display.css';
import Loading from './Loading';

const Display = ({courseDetails}) => {

    // const courseDetails = props.courseDetails;

    const Delete = (Did)=>
    {
      var  index = courseDetails.filter(item => item.id === Did);
    var  newAray =  courseDetails.slice();
     newAray.splice(index, 1);

    }

    // Conditional Rendering    {condition ? () : ()}
    const courseList = courseDetails.length ? courseDetails.map( (element) => {
        // Object Destructuring
        // const title = element.title;
        // const id = element.id;
       

        const { title, details, instructor, id } = element;
        return (
            <div className='course-card' key={id}> 
                <h3>Course Name: {title} </h3>
                <p>Details: {details}</p>
                <p>Instructor:<i>{instructor}</i></p>
                <input type='submit' value='Delete Course' onClick={Delete(id)}></input>
           </div>        
        )
    }) : ( <Loading />)

   

    return(
         <div className='course-display'>
         
            {courseList} 
            
        </div>     
    );
}

export default Display;