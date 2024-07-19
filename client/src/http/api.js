// import axios from "axios";

// export const baseURL = "http://localhost:4000";

// const fetchData = (endpoint, method = 'GET', data = null,headers = {}) => {
//     const config = {
//         url: baseURL + endpoint,
//         method: method.toUpperCase(),
//         headers: {
//             'Content-Type': 'application/json', // Add this header to ensure JSON content type
//             ...headers, // Spread any additional headers passed as an argument
//         },
//         ...(data && { data }),
//     };
//     // console.log("config:",config);

//     return axios(config)
//         .then(response => response.data)
//         .catch(error => {
//             console.error("Error:", error);
//         });
// };

// export default fetchData;
import axios from "axios";

export const baseURL = "http://localhost:4000";

const fetchData = async (endpoint, method = 'GET', data = {}, headers = {}) => {
    const config = {
        url: baseURL + endpoint,
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json', // Ensure JSON content type
            ...headers, 
        },
         data ,
    };
    // console.log("config:", config);

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log("error.response", error.response);
            // Server responded with a status other than 2xx
            throw new Error(error.response.data.message || 'An error occurred');
        } else if (error.request) {
            console.log("error.request", error.request);
            // Request was made but no response received
            throw new Error('No response received from server');
        } else {
            console.log("error.message", error.message)
            // Something happened in setting up the request
            throw new Error(error.message);
        }
    }
};

export default fetchData;
