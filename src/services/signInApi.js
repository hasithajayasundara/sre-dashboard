import axios from 'axios';

export default {
    signIn: {
        verifyIdToken: payload =>
            axios
                .get(
                    `https://oauth2.googleapis.com/tokeninfo?id_token=${payload}`
                )
                .then(res => res.data),
    },
};
