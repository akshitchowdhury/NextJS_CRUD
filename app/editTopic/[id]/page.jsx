//client side logi to edit a topic ; so we import EditTopicForm component and create the logic and send props to the comp


import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
      const res = await fetch(`${process.env.API_URL}api/topics/${id}`, {
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