
import { NFTStorage, Blob } from "nft.storage";

// 공유 계정 , minterlab , nft storage 공유 계졍 
// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJiNDRBZDUzODJEYjNiRDI5NzM2NkFDY2M4OTNBN0YxNGNjYkVDNjgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NDAzNzQ1MTcyMiwibmFtZSI6Im1pbnRlci1sYWIifQ.0VBCGCisVmuydkVgTSFc1RFkkh8gkyQJMKAye5VvOYw";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDEzYUUyRmYxRTViZTYyMEIyMjFmNzA3YjI5MzY5OEYzMTA0REIyNmYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MzIzMzE3MjMxNiwibmFtZSI6InRlc3QifQ.W-z5b0Yl1JzwvX9xwKv4EOdfUKN8bzPGDbij4m7x4R8"

const client = new NFTStorage({ token: API_KEY });

// export async function ipfsUploadImage(files) {

//   console.log(files)


//   //   const directoryPath = dirName;
//   //   const filesToUpload = filesFromPath(directoryPath, {
//   //     pathPrefix: path.resolve(directoryPath), // see the note about pathPrefix below
//   //     hidden: true, // use the default of false if you want to ignore files that start with '.'
//   //   })

//   // 이것도 그냥 , store 로 하면 뒤에 파일명 안 붙는거 아닌가 ???
//   const cid = await client.storeDirectory(files)
//   console.log({ cid })

//   const status = await client.status(cid)
//   console.log(status)
//   return status.cid;
// }



export async function ipfsUploadImage(files) {

  // console.log(files)

  // const cid = await client.storeDirectory(files)
  // console.log({ cid })

  // const arrayBuffer = reader.result;
  const blob = new Blob([files[0]]);

  const cid = await client.storeBlob(blob)
  console.log(cid)

  const status = await client.status(cid)
  console.log(status)
  return status.cid;



}


export async function ipfsUploadMetadata(metadata) {

  console.log(metadata);


  // const content = new Blob(Buffer.from(metadata));


  const blob = new Blob([JSON.stringify(metadata)], { type: 'text/json' });
  const cid = await client.storeBlob(blob);
  console.log(cid);


  // const content = new Blob(JSON.stringify(metadata));
  // const cid = await client.store(metadata);
  // console.log(cid);

  const status = await client.status(cid)
  console.log(status)
  return status.cid;
}