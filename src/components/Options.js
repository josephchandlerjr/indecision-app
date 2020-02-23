import React from 'react'
import Option from './Option'
const Options = (props) => 
    (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                    onClick={props.handleDeleteOptions}
                    className="button--link">
                    Remove all
                </button>
            </div>
            
            {!props.options.length > 0 && 
            <p className="widget__message">No options currently available</p>}
                {
                    props.options.map( (op,ix) => <Option 
                                                    key={op} 
                                                    optionText={op}
                                                    count={ix + 1} 
                                                    handleDeleteOption={props.handleDeleteOption} />)
                }
        </div>
    )


export default Options