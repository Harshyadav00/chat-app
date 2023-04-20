import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from '../misc/firebase';
import { ref, onValue, off } from 'firebase/database';


const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        let profileRef;
        const authUnsubscribe = auth.onAuthStateChanged((authObj) => {
            if (authObj) {

                profileRef = ref(database, `profiles/${authObj.uid}`);

                onValue(profileRef, (snapshot) => {
                    const profileData = snapshot.val();

                    if (profileData) {

                        const { name, createAt } = snapshot.val(); // retrieve the value from the snapshot

                        const data = {
                            name,
                            createAt,
                            uid: authObj.uid,
                            email: authObj.email,
                        };

                        // update the state with the retrieved data
                        console.log(data);

                        setProfile(data);
                    }
                    setIsLoading(false);
                });

            } else {

                if (profileRef) {
                    off(profileRef);
                }

                setProfile(null);
                setIsLoading(false);
            }

        })


        return () => {

            authUnsubscribe();

            if (profileRef) {
                off(profileRef);
            }

        };
    }, [])


    return (
        <ProfileContext.Provider value={{ isLoading, profile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfile = () => useContext(ProfileContext);