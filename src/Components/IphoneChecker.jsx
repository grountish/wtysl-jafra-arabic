
import React, { Component } from 'react'


export default class IphoneChecker extends Component {
    render() {
        return (
            <div>
            {/CriOS/i.test(navigator.userAgent) &&
                /iphone|ipod|ipad/i.test(navigator.userAgent)?
               <div className="iphone-check">
               
               </div> 
                : null
            }
       </div>
        )
    }
}

