import UploadFun from './api'

export const uploadFileList = (fileList) => {
    return new Promise(async (resolve, reject) => {
      if (!fileList && !Array.isArray(fileList)) {
        resolve([]);
        console.log(" upload error");
        return;
      }
      let calls = fileList.map(async (file) => {
        return await UploadFun(file);
      });
      Promise.all(calls)
        .then((data) => {
          let dataList = [];
          data.map((val) => {
            if (val.fileid) {
              dataList.push({
                fileid: val.fileid,
                filetype: val.filetype,
                objectid: val.objectid,
                fileName: val.fileName,
                date: val?.date?.toString(),
              });
            }
            return false;
          });
          resolve(dataList);
        })
        .catch((err) => {
          resolve([]);
          console.log(" catch error");
        });
    });
  };
  export default uploadFileList