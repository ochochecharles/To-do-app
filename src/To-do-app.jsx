import { GrAdd } from "react-icons/gr";
import { IoTrashOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState } from "react";
function ToDoApp() {

    let [inputValues, setInputvalues] = useState([]);

    const AddInputValue = () => {
        let valueOfInput = document.getElementById('input').value;
        setInputvalues(i => [...i, valueOfInput]);
        document.getElementById('input').value = '';
    }
    
    return ( 
        // background component
        <div className="h-screen w-screen flex justify-center items-center">

            {/* main component */}
            <div className="h-96 w-72 bg-blue-300 rounded-md ">

                {/* input and add component */}
                <div className=" h-14 w-64 bg-blue-200 ml-4 mt-8 rounded-md flex justify-between p-2">

                    <input type="text" id="input" className="rounded-md h-10" />

                    {/* the add button */}
                    <button onClick={AddInputValue} className="rounded-md bg-green-800 hover:bg-green-600 h-10 w-10"><GrAdd className="text-white rounded-sm m-3"/></button>
                    
                </div>

                <TaskContainer />

            </div>

        </div>
     );

     function TaskContainer() {

        let [isMark, setIsMark] = useState([]);

        const Mark = (index) => {
                setIsMark((previousIndex)  => {
                    if (previousIndex.includes(index)) {
                        return previousIndex.filter((i) => i !== index);
                    } else {
                        return[...previousIndex, index];
                    }
                } )
            }

        const Delete = (index) => {
           const updatedValues = [...inputValues];
           updatedValues.splice(index, 1);
           setInputvalues(updatedValues)

        
        }
        return ( 
            <ul>
                {inputValues.map((inputValue, index) => (
                <li key={index} className={`bg-blue-200 m-2 py-1 rounded-md flex justify-between items-center text-2xl italic pl-3 ${isMark.includes(index) ? 'line-through ':''}`}>{inputValue} 

                    <div>
                        <button onClick={() => Delete(index)} className="rounded-md bg-red-800 hover:bg-red-600 h-10 w-10">
                        <IoTrashOutline className="text-white rounded-sm m-2" />
                        </button>

                        <button onClick={() => Mark(index)} className="rounded-md bg-yellow-500 hover:bg-yellow-300 h-10 w-10 mx-1"><IoCheckmarkOutline className="text-white rounded-sm m-2" />
                        </button>
                    </div>
                </li>))}
                
            </ul>
         );
    }
    
}

export default ToDoApp;

