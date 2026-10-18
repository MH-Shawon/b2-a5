"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface PropertyPaginationProps {
    currentPage: number;
    totalPages: number;
}

const PropertyPagination = ({
    currentPage,
    totalPages,
}: PropertyPaginationProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;

        const params = new URLSearchParams(searchParams.toString());

        params.set("page", page.toString());

        router.push(`${pathname}?${params.toString()}`);
    };

    if (totalPages <= 1) {
        return null;
    }

    const getPages = () => {
        if (totalPages <= 5) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            );
        }

        if (currentPage <= 3) {
            return [1, 2, 3, "...", totalPages];
        }

        if (currentPage >= totalPages - 2) {
            return [
                1,
                "...",
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }

        return [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
        ];
    };

    const pages = getPages();

    return (
        <div className="flex items-center justify-center gap-2">

            {/* Previous */}
            <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="gap-1"
            >
                <ChevronLeft className="size-4" />
                Previous
            </Button>

            {/* Page Numbers */}
            {pages.map((page, index) => {
                if (page === "...") {
                    return (
                        <span
                            key={`dots-${index}`}
                            className="px-2 text-muted-foreground"
                        >
                            ...
                        </span>
                    );
                }

                return (
                    <Button
                        key={page}
                        size="sm"
                        variant={
                            currentPage === page
                                ? "default"
                                : "outline"
                        }
                        onClick={() => handlePageChange(page as number)}
                    >
                        {page}
                    </Button>
                );
            })}

            {/* Next */}
            <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="gap-1"
            >
                Next
                <ChevronRight className="size-4" />
            </Button>
        </div>
    );
};

export default PropertyPagination;