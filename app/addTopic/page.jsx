"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// using clien to make this a client based component. By default all comp in next js is server based comp

export default function AddTopic(){

    const[title, setTitle]= useState("")
    const[description, setDescritpion]= useState("")

    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
    
        if (!title || !description) {
            console.log("Title:", title);
            console.log("Description:", description);
            alert("Title and description are required.");
            return;
        }

        // fetching data from api endpoints

        try {

           const res =  await fetch(`${process.env.API_URL}api/topics`, 
        {
            //since this is a post request i.e adding data to db we add the following paramtr as necessity
            method: "POST", //type of method
            
            headers: {"Content-type" : "application/json"}, //header of the info\

            body: JSON.stringify({title,description}) //main data of the info
        })

        if(res.ok){
            router.push('/')
            //we do this to redirect user to homepage once a new topic has been created
        }
        else{
            throw new Error("falied to create a new topic")
        }


        } catch (error) {
            console.log(error)
        }
    }
      
    return(
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-32">
            <input
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            // after setting the title we need to update the value of input field to the updated state hence value = title
                className=" border border-slate-500 px-16 py-2"
        type="text"
        placeholder="Topic Title"
            />
            <input
            onChange={(e)=> setDescritpion(e.target.value) }
            value={description}
                className=" border border-slate-500 px-16 py-2"
        type="text"
        placeholder="Topic Description"
            />

            <button type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add topic</button>

            </form>
        </>
    )
}