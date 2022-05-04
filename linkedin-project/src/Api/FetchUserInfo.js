import React from "react";

export default function FetchUserInfo() {
    const [userInfo, setUserInfo] = useState([]);

    const fetchUserData = () => {
        fetch("https://striveschool-api.herokuapp.com/api/profile/", {
            method: "GET",
            headers:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcyN2U0NTA3MzIzMDAwMTU2Y2JhMGYiLCJpYXQiOjE2NTE2NzA2MDQsImV4cCI6MTY1Mjg4MDIwNH0.8CWJKhMFn8PChHROYrx0tiDogBGkE4tbB_n_wvNbDtw",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUserInfo(data);
            });
    };
}
