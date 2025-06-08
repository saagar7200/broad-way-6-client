import CategoryList from "@/components/category/list";
import { PageHeader } from "@/components/common/page-header";
import { Metadata } from "next";
import { IoMdAdd } from "react-icons/io";

export const metadata: Metadata = {
  title: "Expense Tracker | List  Category",
  description: "List all your custom expense category.Track Your Daily Expenses",
};
export default function Category() {
    return (
   <main>
      <PageHeader
        title="Expense Category List"
        buttonText="Add New Category"
        link="/categories/create"
        Icon={<IoMdAdd size={26}/>}
      />
      <div className=' w-full px-10 mt-15'>
        <CategoryList/>
      </div>
     </main>
    );
  }