import ExpenseList from "@/components/expense/list";
import { PageHeader } from "@/components/common/page-header";
import { IoMdAdd } from "react-icons/io";
export default function Category() {
    return (
   <main>
      <PageHeader
        title="Expense List"
        buttonText="Add New Expense"
        link="/expenses/create"
        Icon={<IoMdAdd size={26}/>}
      />
      <div className=' w-full px-10 mt-10'>
        <ExpenseList/>
      </div>
     </main>
    );
  }