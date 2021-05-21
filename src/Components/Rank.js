import React from 'react';

const Rank = ({name,entries}) =>{
    return(
        <div>
        <div className='bold white f3'>
        {`${name}, your current entries is ...`}
    </div>
    <div className='bold white f2'>
        {entries}
    </div>
 </div>
    );
} 
export default Rank;