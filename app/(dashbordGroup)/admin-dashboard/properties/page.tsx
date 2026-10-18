import { getAllPropertyByAdmin } from "@/service/admin/getAllPropertiesByAdmin";
import PropertiesTable from "./_components/PropertiesTable";

export default async function PropertiesPage() {

    const properties = await getAllPropertyByAdmin();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Properties
                </h1>

                <p className="text-sm text-muted-foreground">
                    Manage and monitor all rental properties.
                </p>
            </div>

            <PropertiesTable properties={properties} />
        </div>
    );
}