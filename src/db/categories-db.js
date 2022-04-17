import {  quiz2, quiz3, quiz4 } from "asset";
import { v4 as uuid } from 'uuid';

export const categories = [
    {
    
_id : uuid(),
name: "science",
image: quiz3,
link:"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
},
    {
    
_id : uuid(),
name: "tech",
image: quiz4,
link:"https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
},
    {
    
_id : uuid(),
name: "html , css, js",
image: quiz2,
link:"https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
},
]