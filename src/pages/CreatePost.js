import Nav from '../pages/components/Nav'
import React from "react";
import { useState } from 'react';
import { TextField } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




export default function CreatePost() {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pet, setPet] = useState('Option 1');
    const [contact, setContact] = useState('');
    const [emergency, setEmergency] = useState(false);
    const [illness, setIllness] = useState('');
    const [specialist, setSpecialist] = useState('Option 1');
    const handleChangePet = (event) => {
    setPet(event.target.value);
    };
    const handleChangeSpecialist = (event) => {
        setSpecialist(event.target.value);
        };
    






    return (


        <>
            <Nav />
            <div className = "flex flex-col item-center gap-10 p-12">

            <p className="text-lg font-bold justify-center" >Consultation Information</p>
            
            
            <div className= "flex flex-row gap-10"> 
                    
                    <Select id = "pet" className = "w-1/4" value={pet} onChange={handleChangePet}>
                    <MenuItem value="Option 1">Select Your Type of Pet *</MenuItem>
                    <MenuItem value="Option 2">Dog</MenuItem>
                    <MenuItem value="Option 3">Cat</MenuItem>
                    <MenuItem value="Option 4">Other (Please specify type of animal in the title)</MenuItem>
                    </Select>

                    <Select id = "Specialist" className = "w-1/4" value={specialist} onChange={handleChangeSpecialist}>
                    <MenuItem value="Option 1">Select Your Type of Specialist *</MenuItem>
                    <MenuItem value="Option 2">Onocologist</MenuItem>
                    <MenuItem value="Option 3">Surgeon</MenuItem>
                    <MenuItem value="Option 4">Other (Please specify type of animal in the title)</MenuItem>
                    </Select>



            </div>

                <div className="flex flex-col gap-10">
            
                    <TextField 
                        className="w-1/2"
                        required
                        id="name"
                        label="Title"
                        value={title}
                        variant = "standard"
                        onChange={(event) => setTitle(event.target.value)}/>
                    <TextField
                        className="w-1/2"
                        required
                        id = "description"
                        label = "Description"
                        value = {description}
                        onChange= {(event) => setDescription(event.target.value)}/>   

                    <TextField
                        className="w-1/2 "
                        required
                        id = "contact"
                        label = "Contact Information"
                        value = {contact}
                        variant = "standard"
                        onChange= {(event) => setContact(event.target.value)}/>  
                </div>


                
                
                </div>


        </>
    )
}