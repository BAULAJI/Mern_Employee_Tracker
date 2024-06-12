import React,{useState} from 'react';

function ImageUpload(){
    
    const [image,setImage]=useState("");

    function convertToBase64(e){
        console.log(e);
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result);
            setImage(reader.result);
        }
        reader.onerror=error=>{
            console.log("Error: ",error);
        }
    }
    return(
        <div className="up" style={{width:"auto"}}>
            Upload Image
            <input
            type="file"
            accept="image/*"
            onChange={convertToBase64}/>
            {image===""||image==null?"": <img width={100} height={100} src={image} alt='im'/>}
       

        </div>
    )
}

export default ImageUpload;