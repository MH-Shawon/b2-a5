import { getCategories } from "@/service/category/getAllCategory";
import CategoriesView from "./_components/CategoriesView";

export default async function CategoriesPage() {

        const categories = await getCategories()




  return (
    <div className="space-y-6">
      <CategoriesView categories={categories.data} />
    </div>
  );
}