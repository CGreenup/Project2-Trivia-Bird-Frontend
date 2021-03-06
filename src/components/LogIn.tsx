import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserProfile } from "../models/UserProfile";
import { ApiValidateProfiles } from "../remote/SpringApi";

type Props = {
    callback: (profile:any) => void
}

const LogIn:React.FC<Props> =  (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const userProfile = UserProfile.prototype;
    
    
    function validateUser() {
        return username.length > 0 && password.length > 0;
    }

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        userProfile.username = username;
        userProfile.password = password;
        let result = await ApiValidateProfiles(userProfile)

        if (result) {
            console.log("Profile validated !");
            console.log(result);
            props.callback(result);
        } else { console.log("Profile validation failed !");}
    }

    return (
        <div className="LogIn" style={{width: '60%', paddingLeft: '40%'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" disabled={!validateUser()}>
                    Submit
                </Button>
            </Form>
        </div>
        
    );
}
      

export default LogIn;