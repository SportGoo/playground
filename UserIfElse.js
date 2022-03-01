import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        if (this.state.isLoggedIn) {
            return (
                <div> Welcome Soner </div>
            )
        } else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
        // return (
        //     <div>
        //         <div> Welcome Soner</div>
        //         <div> Welcome Guest</div>

        //     </div>
        // )
    }
}

export default UserGreeting
