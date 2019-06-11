import React from 'react'
import{Textfield} from 'react-mdl'
import './Search.css';
export default function search(props) {
    return (
        <div>
            <div className='row justify-content-center'>
                <Textfield
                    onChange={props.getTechType}
                    label="Technology You Know :"
                    floatingLabel
                    style={{width: '250px'}}
                />
            </div>
            <div className='row justify-content-center'>
                <button type="button" className="btn btn-outline-primary" onClick={props.searchData}>Search</button>
            </div>
        </div>
    )
}
