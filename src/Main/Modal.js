import React, {useState} from 'react';

import '../Sass/Modal.scss';

const Modal = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameVal, setNameVal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === ''){

            setNameVal(true);
        }
        else {
            setName('');
            setEmail('');
            alert('Registered');

            props.close();
        }

    }

    return ( 
        <div className="Modal">

            <div className="ModalContent">

                <div className="CloseDiv">
                    <span className="Close" onClick={props.close}>&times;</span>
                </div>
                
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                            onFocus={() => setNameVal(false)}></input>
                        {nameVal ? <p>Name is Required</p> : null}
                    </div>

                    

                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <input type="submit" value="Submit"></input>

                </form>
            </div>

        </div>
     );
}
 
export default Modal;