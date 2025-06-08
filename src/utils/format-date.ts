export const formatDate = (dateString:string) =>{
    const options = {
        year:"numeric",
        day:"numeric",
        month:"short",
      }

     const  date =new Date(dateString)
// @ts-expect-error //year
   return  date.toLocaleDateString('en-Us',options)
}