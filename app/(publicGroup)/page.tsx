import {  getPropertiesForHome } from "./_actions/getPropertiesForHome";
import { getPropertyCategories } from "./_actions/getPropertiesByCategory";
import CategoriesComponent from "./_conponents/CategoriesComponent";
import Cta from "./_conponents/Cta";
import FeaturedProperties from "./_conponents/FeaturedProperties";
import Hero_Home from "./_conponents/hero_home";
import SimpleProcess from "./_conponents/SimpleProcess";








export default async function Home() {

  const properties = await getPropertiesForHome()




  const categories = await getPropertyCategories()

  return (
    <main className="min-h-screen bg-background">
      {/* ===HERO=== */}
      <Hero_Home />



      {/* ===FEATURED PROPERTIES=== */}

      <FeaturedProperties properties ={properties}  />





      {/* ===CATEGORIES=== */}
      <CategoriesComponent categories={categories} />




      {/* ===HOW IT WORKS=== */}

      <SimpleProcess />




      {/* ===CTA=== */}
      <Cta />


    </main>
  );
}
