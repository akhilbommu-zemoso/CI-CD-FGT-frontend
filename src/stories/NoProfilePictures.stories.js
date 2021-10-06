import React from 'react'
import { ProfileHeader } from '../atoms/ProfileAtom'
import { BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import ProfilePicture from '../components/ProfilePicture';
import Avtar from '../components/Avtar'
export default {
    title: "ProfilePicture/NoProfilePicture",
    decorators: [withKnobs],
};
const useStyles = makeStyles((theme) => ({
    circle: {
        width: 60,
        height: 60,
        marginRight: 20,
        backgroundColor: "rgba(182,32,224,0.71)",
        fontSize: 28,
        marginTop: '30px',
        marginBottom: '30px',
    },
    avatar: {
        backgroundColor: 'rgba(182,32,224,0.71)',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        fontSize: '18px'
    },
}));
const data = () => {
    var json = {
        id: "1",
        name: "Fareed Sheik",
        email: "sheikfareed3819@gmail.com",
        auth0Id: "google - oauth2 | 115320575601904541142",
        phone: " + 91 - 7680024324", "country": "United Arab Emirates",
        createdAt: "1589626102282", "createdBy": "Fareed",
        modifiedAt: "1589626102282", "modifiedBy": "Fareed",
        profilePicture: {
            id: "1",
            photoBlob: null,
            photoContentLength: 0,
            photoContentType: null
        }
    }
    localStorage.setItem('user', JSON.stringify(json))
    return json;
}

export const NoProfilePicture = () => {
    const classes = useStyles();
    data();
    return (
        <Router>

            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                Small size Profile Picture</div>
            <ProfilePicture pictureStyle={classes.avatar} />
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                Medium size Profile Picture</div>
            <ProfilePicture pictureStyle={classes.circle} />
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                Large size Profile Picture</div>
            <Avtar imageData={data().profilePicture} />
        </Router>);
}

