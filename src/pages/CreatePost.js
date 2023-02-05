import Nav from '../pages/components/Nav'
import { use, useState, useEffect } from 'react';
import { FormControlLabel, TextField } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import {Checkbox} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { useRouter } from 'next/router';



export default function CreatePost() {
    const [imgUrl, setimgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [petId, setPetId] = useState('');
    const [petData, setPetData] = useState();
    const [contact, setContact] = useState('');
    const [emergency, setEmergency] = useState(false);
    const [illness, setIllness] = useState('');
    const [specialist, setSpecialist] = useState('Option 1');
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:3000/api/pet', {
            method: 'get', credentials: 'include'
          });
          const data = await response.json();
          setPetData(data);
        };
    
        fetchData();
      }, []);

    const handleChangePet = (event) => {
        setPetId(event.target.value)
    };

    const handleEmergency = (event) => {
        setEmergency(event.target.checked);
        };

const handleChangeImage = (event) => {
    var file = event.target.files[0];
    var fileReader = new FileReader();

    fileReader.onload = function(event) {
        var contents = event.target.result;
        console.log(contents);
        setimgUrl(contents);
        console.log(imgUrl);
    };

    if (file) {
        fileReader.readAsDataURL(file);
    }
};

    const styles = theme => ({
        multilineColor:{
            color:'red'
        }
    });

    return (
        <>
            <Nav />
            <div className = "flex flex-col gap-5 p-12 w-1/2">

            <div className= "flex flex-row ">
                <p className="text-2xl font-bold" >Consultation Information</p>
                
            </div>
            
            
            <div className= "flex flex-row gap-10 mt-8"> 
                    
                    <Select className = "w-full" value={petId} onChange={handleChangePet}>
                    {
                        petData?.data.map((val, index) => {
                            return (<MenuItem value={val.id}>{val.name}</MenuItem>      
                            )
                        })
                    }
                    </Select>

                    <div className="flex flex-row justify-end w-full">
                        <FormControlLabel
                            control = {<Checkbox style = {{color:'#e57373'}} onChange={handleEmergency} checked={emergency}/>}
                            label="Urgent?"
                            labelPlacement="start"
                            className="w-min"
                            />
                    </div>



            </div>

                <div className="flex flex-col gap-10">
            
                    <TextField 
                        required
                        id="name"
                        label="Title"
                        value={title}
                        variant = "standard"
                        onChange={(event) => setTitle(event.target.value)}/>

                    <TextField
                        required
                        id = "description"
                        label = "Description"
                        value = {description}
                        multiline
                        maxRows={20}
                        defaultValue = "Description"
                        inputProps={{style:{height: "200px",},}}
                        onChange= {(event) => setDescription(event.target.value)}/>   
                    
                    <TextField
                        required
                        id = "illness"
                        label = "Type of Illness"
                        value = {illness}
                        variant = "standard"
                        onChange= {(event) => setIllness(event.target.value)}/>  

                    <TextField
                        required
                        id = "contact"
                        label = "Contact Information"
                        value = {contact}
                        variant = "standard"
                        onChange= {(event) => setContact(event.target.value)}/>
                    <div className="flex flex-row gap-4 items-center"> 
                        <span className="text-xl">Image:</span>
                        <input 
                            type='file'
                            id="imageInput"
                            name="imageInput"
                            onChange={handleChangeImage}
                            />
                    </div> 
                </div>
                
                <div className="flex flex-row justify-start gap-6 my-12">

                <a onClick={() => {
                    sendConsultationForm({title: title, urgency: emergency, description: description, petId: petId, 
                        contact: contact,illness: illness, specialist: specialist, imageURL: imgUrl});

                    router.push('/');
                 }} className="flex flex-row font-bold px-3 py-2 hover:bg-rose-400 bg-rose-600 text-white rounded-lg">
                    <p>Submit</p>
                </a>
                </div>
                    
                
                </div>

        </>
    )
}


CreatePost.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/api/pet', {
        method: 'get', credentials: 'include'
      });
    const data = await response.json();
    return { createPostProps: data };
  };



async function sendConsultationForm({title, urgency, description, pet, contact, illness, specialist, imageURL}) {
    console.log(imageURL)
    try {
        const petId = "5257fd4a-3aa1-4397-9d71-76dc3dd28204";
        const res = await fetch('http://localhost:3000/api/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                    title: title,
                    description: description,
                    urgency: urgency,
                    petId: petId,
                    illness: illness,
                    image: imageURL,
                    resolved: false,
            })
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    } catch {
        console.log('error')
    }
}
