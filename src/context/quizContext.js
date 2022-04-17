import { createContext, useContext, useState } from "react";
import { categories } from "db/categories-db";


const quizContext = createContext()

 const useQuiz = ()=> useContext(quizContext)


 const Quizprovider = ({children}) =>{
     const [ questionCollection ,  setQuestionCollection ] = useState([]);
     const [score, setScore] = useState(0);
     const [result , setResult ] = useState([]);



    const fetchData = (categoryId)=> {
    let isItemExist = categories.find((element)=> element._id === categoryId )
        fetch(isItemExist.link).then(res=>res.json())
        .then( data => setQuestionCollection(data.results) )

    }
return(
    <quizContext.Provider value={{fetchData , questionCollection , score, setScore, result , setResult}}>
        {children}
    </quizContext.Provider>

)



 }
 export {useQuiz, Quizprovider}