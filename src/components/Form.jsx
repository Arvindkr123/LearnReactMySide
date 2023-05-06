import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('Arvind K')
    return (
        <form>
            <h1>Controlled Components</h1>
            <textarea type="text" value={name} onChange={(e) => setName(e.target.value.toUpperCase())} />
        </form>
    )
}

export default Form;
// const Form = () => {
//     const [name, setName] = useState('Arvind K')
//     return (
//         <form>
//             <h1>Controlled Components</h1>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value.toUpperCase().substring(0, 16))} />
//         </form>
//     )
// }

// export default Form;



// import React, { Component } from 'react'
// export default class Form extends Component {
//     state = {
//         value: 'Arvind K'
//     }
//     render() {
//         return (
//             <form>
//                 <h2>Controlled Input</h2>
//                 <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value.toUpperCase().substring(0,10)})} />
//             </form>
//         )
//     }
// }

