import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('Arvind K')
    const [password, setPassword] = useState('ahjbdfasd')
    const changeHandler = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
            console.log(name)
        } else {
            setPassword(e.target.value)
            console.log(password)
        }
    }
    return (
        <form>
            <h1>Controlled Multiple Input Elements</h1>
            <label>
                Name :  <input type="text" name='name' value={name} onChange={changeHandler} />
            </label><br /><br />
            <label>
                Password :  <input type='password' name='password' value={password} onChange={changeHandler} />
            </label><br /><br />
        </form>
    )
}

export default Form;

// const Form = () => {
//     const [name, setName] = useState('Arvind K')
//     const [password, setPassword] = useState('ahjbdfasd')
//     const NameHandler = (e) => {
//         setName(e.target.value)
//     }
//     const PassHandler = (e) => {
//         setPassword(e.target.value)
//     }
//     return (
//         <form>
//             <h1>Controlled Multiple Input Elements</h1>
//             <label>
//                 Name :  <input type="text" name='name' value={name} onChange={NameHandler} />
//             </label><br /><br />
//             <label>
//                 Password :  <input type='password' name='password' value={password} onChange={PassHandler} />
//             </label><br /><br />
//         </form>
//     )
// }

// export default Form;
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

