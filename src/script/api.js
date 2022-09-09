const uploadUrl= " https://fileupload.dev.ainqaplatform.in/eambulance/11"

export  const UploadFun = async (file) => {
 return new Promise(async (resolve, reject) => {
   let formData = new FormData();
   formData.append("files", file);
   console.log(file)
   await fetch(uploadUrl, {
     method: "POST",
     mode: 'no-cors',
   
     body: formData,
     redirect: "follow",
   })
   
     .then((response) => response.json())
   
    
     .then((res) => {
       
       resolve({
         fileid: res.fileid,
         fileName: file.name,
         filetype: file.type,
         objectid: res.objectid,
         date: file?.lastModified,
       });
      
     })
     .catch((err) => {
      // resolve({});
       console.log(" api error");
     });
 });
 
};
export default UploadFun
