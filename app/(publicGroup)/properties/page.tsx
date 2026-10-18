
import { getProperties } from "./_actionProperties/getProperties";
import PropertyFilters from "./_components/PropertyFilters";
import PropertyPagination from "./_components/PropertyPagination";
import { PropertyRecords } from "./_components/PropertyRecords";


// import PropertyPagination from "./_components/PropertyPagination";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const searchQuery = await searchParams;
  const properties = await getProperties({ searchQuery });


  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              RentNest Properties
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Find your perfect home
            </h1>

            <p className="mt-3 text-muted-foreground">
              Explore apartments, houses, studios, and rooms available for
              rent in your preferred location.
            </p>
          </div>


        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="grid gap-8 md:grid-cols-10 ">

          <div className="md:col-span-3  ">
            <div className="sticky top-0 z-10">
              <PropertyFilters />
            </div>
          </div>


          {/* Records */}
          <div className="md:col-span-7  "  >
            <PropertyRecords properties={properties.data} />


            {/* Pagination */}
            <div className="mt-12">
              <PropertyPagination currentPage={properties.meta.page} totalPages={properties.meta.totalPages} />
            </div>
          </div>

        </div>


      </section>
    </main>
  );
}