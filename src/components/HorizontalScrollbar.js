import React,{ useContext } from 'react'
import { Box ,Typography  } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 
'react-horizontal-scrolling-menu';

// const LeftArrow=()=>{
//     const{ scrollPrev } = useContext(VisibilityContext)

//     return(
//         <Typography onClick={()=> scrollPrev()} className="right-arrow" >
//             <img src="./icons/left-arrow.png" alt="right-arrow" />
//         </Typography>
//     );
//  };

//  const RightArrow=()=>{
//     const{scrollNext} = useContext(VisibilityContext)

//     return(
//         <Typography onClick={()=> scrollNext()} className="left-arrow" >
//             <img src="./icons/right-arrow.png" alt="left-arrow" />
//         </Typography>
//     );
//  };



const HorizontalScrollbar = ({ data,bodyPart,setbodyPart }) => {
  return (

<ScrollMenu >
    {data.map((item)=>(
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
             >
              <BodyPart item={item} bodyPart={bodyPart} setbodyPart={setbodyPart}/>
            </Box>
    ))}
    </ScrollMenu>
  );
};



export default HorizontalScrollbar
