import "./App.css";
import { ChakraProvider, Box } from '@chakra-ui/react'
import { React, useState } from 'react';
import { Container } from "react-bootstrap";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import hand from './Saly-8.png';
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


function App() {

  const PK = '84288e46eb2143b807ee2e1db447b410846e3c75fdc71b8ea5549e94c68e7c0c'; // channel private key
  const Pkey = `0x${PK}`;
  const signer = new ethers.Wallet(Pkey);
  const [inputList, setinputList] = useState([{ Address: '', Share: '' }]);



  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
    console.log(list)

  }


  const sendNotification = async () => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `Notification from the Asset Vault`,
          body: `You have registered successfully with Asset Vault.`
        },
        payload: {
          title: `Notification from the Asset Vault`,
          body: `You have registered successfully with Asset Vault.`,
          cta: 'https://github.com/neel-ds/assetvault',
          img: 'https://bafkreifdfmloam7qliahnivdbo3k5wpff7td255ziwtqmg6jmr73habqc4.ipfs.nftstorage.link/'
        },
        recipients: 'eip155:5:0x6f99Da273ff1665707e012B47F0BeE3a3e412673', // recipient address
        channel: 'eip155:5:0xD720205354C0b922666aAf6113C45eF8026a409E', // your channel address
        env: 'staging'
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log('API repsonse: ', apiResponse);
    await  getNotification();
    } catch (err) {
      console.error('Error: ', err);
    }
  }


  const getNotification = async () => {
    try {
      const notifications = await PushAPI.user.getFeeds({
        user: 'eip155:5:0x6f99Da273ff1665707e012B47F0BeE3a3e412673', // user address in CAIP
        env: 'staging'
      });
      alert(notifications[0].title);
      console.log('Notification received:', notifications);
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  const handleremove = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  }

  const handleaddclick = async () => {
    setinputList([...inputList, { Address: '', Share: '' }]);
await sendNotification();
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
                inputList.map((x, i) => {
                  return (
                    <div className="row mb-3">
                      <div >
                        <Text className="AddressTitle" color="white" fontSize='2xl'>Address</Text>
                        <Input bg="white" width="1000px" placeholder='Enter Address' size='lg' onChange={e => handleinputchange(e, i)} />
                      </div>
                      <div class="sharediv">
                        <Text color="white" fontSize='2xl'>Share</Text>
                        <Input bg="white" width="1000px" placeholder='Enter Share' size='lg' onChange={e => handleinputchange(e, i)} />
                      </div>
                      <div></div>
                      <div class="form-group col-md-2 mt-4">
                        {
                          inputList.length !== 1 &&
                          <Button m={[2]} colorScheme='red' onClick={() => handleremove}>Remove</Button>
                        }
                        {inputList.length - 1 === i &&
                          <Button m={[2]} onClick={handleaddclick} colorScheme='whatsapp'>Add Participants</Button>
                        }
                      </div>
                      <Button m={[2]} onClick={getNotification} colorScheme='whatsapp'>Get</Button>
                    </div>
                  );
                })}


            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );

}




export default App;
