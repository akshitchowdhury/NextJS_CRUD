import EditTopicForm from "@/components/EditTopicForm";


// const getTopicById = async(id)=>{

//     try {
//         const res = await fetch(`http://localhost:3000/api/topics/${id}`,
//     {cache: 'no-store'})

//     if(!res.ok){
//         throw new Error("Failed to fetch topic")

//     }
//     else{
//         res.json()
//     }
//     } catch (error) {
//         console.log(error)
//     }

// }
// // export default async function EditTopic({params}){

// // // In this code, params is likely an object containing parameters passed to the component. therefore id is the params that is 
// // // sent and utilized further. also check api files where GET api by id is created exactly for this purpoose to enable to edit



// //     const {id} = params;
// //     const {topic} = await getTopicbyId(id)
// //     console.log("id",  id)
    
// //     const{title, description} = topic;

// //         return(
// //             <>
// //                 <EditTopicForm id={id}
// //                     title={title}
// //                     description={description}
// //                 />
// //             </>
// //         )
    
// // }


// export default async function EditTopic({ params }) {
//     const { id } = params;
//     const { topic } = await getTopicById(id);
//     const { title, description } = topic;
  
//     return <EditTopicForm id={id} title={title} description={description} />;
//   }

const getTopicById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default async function EditTopic({ params }) {
    const { id } = params;
    const { topic } = await getTopicById(id);
    const { title, description } = topic;
  
    return <EditTopicForm id={id} title={title} description={description} />;
  }