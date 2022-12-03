import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'
import {React ,useState} from 'react';
import { Container } from "react-bootstrap";
import { Button, ButtonGroup } from '@chakra-ui/react'

    function App() {
      const [inputList, setinputList]= useState([{Address:'', Share:''}]);
      const handlesharechange=(e, index)=>{
        
        const {name, value}= e.target;  
        if(parseInt(value) > 0 && parseInt(value) <= 100) {
        const list= [...inputList];
        const pair = {Address: name, Share: value};
        list.push(pair);
        e.preventDefault();
        setinputList(list);
        console.log(list);
        }
      }
      

      const handleinputchange=(e, index)=>{
        
        const {name, value}= e.target;  
        if(parseInt(value) > 0 && parseInt(value) <= 100) {
        const list= [...inputList];
        const pair = {Address: name, Share: value};
        list.push(pair);
        e.preventDefault();
        setinputList(list);
        console.log(list);
        }
      }
     
      const handleremove= index=>{
        const list=[...inputList];
        list.splice(index,1);
        setinputList(list);
      }
    
      const handleaddclick=()=>{ 
        setinputList([...inputList, { Address:'', Share:''}]);
      }

      const deployContracts = () => {
        console.log("list", inputList)
      }

      return (
        <ChakraProvider>
        <Container className="content">
         <div className="row">
           <div className="col-sm-12">
             <h5 className="mt-3 mb-4 fw-bold">Add all the addresses here </h5>
               
                { 
                inputList.map( (x,i)=>{
                  return(
                  <div className="row mb-3">
                     <div class="form-group col-md-4">
                     <label >Address</label>
                      <input type="text"  name="Address" class="form-control"  placeholder="Address" onChange={ e=>handleinputchange(e,i)} />
                   </div>
                   <div class="form-group col-md-4">
                   <label >Share</label>
                      <input type="text"  class="form-control" name="share"  placeholder="Share" onChange={ e=>handlesharechange(e,i) }/>
                   </div>
                   <div class="form-group col-md-2 mt-4">
                   {
                      inputList.length!==1 &&
                       <Button colorScheme='red' onClick={()=> handleremove(i)}>Remove</Button>
                   }
                   { inputList.length-1===i &&
                   <Button onClick={ handleaddclick} colorScheme='whatsapp'>Add Participants</Button>
                   }
                   </div>
                   <Button onClick = {deployContracts}>Create Bill</Button>
                </div>
                
                  );
                 } )} 
    
                   
           </div>
         </div>
        </Container>
        </ChakraProvider>
      );

    }
    



export default App;
