import React from 'react'

class Menu extends React.Component{
    render() {
        return (
            <>  
                <Title/>
                <ul>
                    <li> Home</li>
                    <li>About </li>
                    <li> Contact</li>
                    <li>Rules</li>

                </ul>
            </>
        )
    }
}

export default Menu