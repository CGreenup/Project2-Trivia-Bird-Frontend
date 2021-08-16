import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserProfile } from "../models/UserProfile";
import { ApiPutProfiles } from "../remote/SpringApi";

export default function NewProfile() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [screenName, setScreenName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const userProfile = UserProfile.prototype;
    
    
    function validateUser() {
        return username.length > 0 && password.length > 0 && screenName.length > 0 && email.length > 0 && bio.length > 0;
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        userProfile.username = username;
        userProfile.password = password;
        userProfile.screenName = screenName;
        userProfile.email = email;
        userProfile.bio = bio;
        event.preventDefault();

        if (ApiPutProfiles(userProfile)) {
            console.log("Profile created !")
        } else { console.log("Profile Not Created !")}
    }

    return (
        <div className="NewProfile" style={{width: '70%', paddingLeft: '20%'}}>
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
                <Form.Group controlId="screenName">
                    <Form.Label>Screen Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={screenName}
                        onChange={(e) => setScreenName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="bio">
                    <Form.Label>Biography</Form.Label>
                    <Form.Control
                        type="textarea"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" disabled={!validateUser()}>
                    Create Profile
                </Button>
            </Form>
        </div>
        
    );
}
      