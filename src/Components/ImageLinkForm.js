import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
        <div >
            <p className='f3 baskerville center'>
                {'This brain will detect a face in the picture. Give it a try.'}
            </p>
            <div className='center pv0'>
                <div className='form center w-50 pa3 br4 shadow-5'>
                    <input className='f3 w-60' type='text' onChange={onInputChange} placeholder='Enter Picture Url' />
                    <button className='w-15 grow f4 br2 ph3 pv2 dib white bg-light-purple pointer'
                    onClick={onButtonSubmit}>detect </button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm