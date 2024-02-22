import { useQuery} from "react-query";
import { 
  faqQuery
} from "@/api/functions/cms.api";

 const useFaqHooks = (initialData: any) => {
 
    const faq = useQuery("faq", faqQuery,{
      initialData
    });
  
    return {
      faq,
    };
  };
  
  
  export default useFaqHooks