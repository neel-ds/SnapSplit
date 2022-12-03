import "./App.css";
import { ChakraProvider ,Box} from '@chakra-ui/react'
import {React ,useState} from 'react';
import { Container } from "react-bootstrap";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import hand from './Saly-8.png';

    function App() {
      const [inputList, setinputList]= useState([{Address:'', Share:''}]);

      

      const handleinputchange=(e, index)=>{
        const {name, value}= e.target;
        const list= [...inputList];
        list[index][name]= value;
        setinputList(list);
        console.log(list)
    
      }
      
     
      const handleremove= index=>{
        const list=[...inputList];
        list.splice(index,1);
        setinputList(list);
      }
    
      const handleaddclick=()=>{ 
        setinputList([...inputList, { Address:'', Share:''}]);
      }


      return (
        <ChakraProvider >
        
         <div className="bgmaate">
          
         
          
          <h1 className="Title">SnapSplit</h1>
          

          
          <div className="content">
          
          
          
     <div className="row">
       <div className="col-sm-12">
         <h5 className="AddressHeader">Add all the address here </h5>
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                 <div >
                 <Text className="AddressTitle" color="white" fontSize='2xl'>Address</Text>
                 <Input bg="white" width="1000px" placeholder='Enter Address' size='lg' onChange={ e=>handleinputchange(e,i)}/>
               </div>
               <div class="sharediv">
               <Text color="white" fontSize='2xl'>Share</Text>
               <Input bg="white" width="1000px"  placeholder='Enter Share' size='lg' onChange={ e=>handleinputchange(e,i)}/>
               </div>
              <div></div>
               <div class="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <Button m={[2]} colorScheme='red' onClick={()=> handleremove(i)}>Remove</Button>
               }
               { inputList.length-1===i &&
               <Button m={[2]}  onClick={ handleaddclick} colorScheme='whatsapp'>Add Participants</Button>
               }
               </div>
            </div>
              );
             } )} 

               
       </div>
     </div>
    </div>
    </div>
        </ChakraProvider>
      );

    }
    



export default App;
