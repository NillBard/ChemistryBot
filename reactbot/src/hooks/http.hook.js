// import { useState, useCallback } from "react"

// export const useHttp = ()=>{
//     const {loading, setLoading} = useState(false)
//     const {error, setError} = useState(false)
//     const request = useCallback( async(url, method ='GET', body = null, headers ={}) =>{
//         setLoading(true);
//         try {
//             const response =  await fetch(url, {method, body, headers})
//             data = await response.json()

//             if(!response.ok){
//                 throw new Error(data.message || 'Something wrong')
//             }

//             setLoading(false);
//             return data;
//         } catch (e) {
//             setLoading(false)
//             setError(e.message)
//             throw e
//         }
//     }, [])

//     const clear = ()=> setError(null);

//     return {loading, request, error}
// }
