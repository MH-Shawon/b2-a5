"use client";

import { useState } from "react";
import { MoreHorizontal, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UsersTableProps, UserStatus } from "@/lib/AdminType";
import { updateUserStatus } from "../_actions/updateUserStatus";
import { useRouter } from "next/navigation";
import { toast } from "sonner";




export default function UsersTable({ users }: UsersTableProps) {
    const router = useRouter()




    const handleStatusChange = async (id: string, status: UserStatus) => {
        try {

            const result = await updateUserStatus(id, status);
            if (result.success) {
                toast.success(result.message)
                router.refresh()
            }

        } finally {

        }
    };

    return (
        <div className="rounded-xl border bg-card">
            <Table>
                <TableHeader>

                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created Date</TableHead>
                        <TableHead className="text-right">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            {/* User */}
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-9 items-center justify-center rounded-full bg-muted">
                                        <UserRound className="size-4" />
                                    </div>

                                    <div>
                                        <p className="font-medium">
                                            {user.name}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </TableCell>

                            {/* Phone */}
                            <TableCell>
                                {user.phone || "N/A"}
                            </TableCell>

                            {/* Role */}
                            <TableCell>
                                <Badge variant="outline">
                                    {user.role}
                                </Badge>
                            </TableCell>

                            {/* Status */}
                            <TableCell>
                                <Badge
                                    variant={
                                        user.status === "ACTIVE"
                                            ? "default"
                                            : "destructive"
                                    }
                                >
                                    {user.status}
                                </Badge>
                            </TableCell>

                            {/* Created Date */}
                            <TableCell>
                                {new Date(user.createdAt).toLocaleDateString(
                                    "en-GB",
                                    {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    }
                                )}
                            </TableCell>

                            {/* Action */}
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={
                                            <Button variant="destructive" size="icon">
                                                <MoreHorizontal className="size-4" />
                                            </Button>
                                        }
                                    />



                                    <DropdownMenuContent align="end">
                                        {user.status === "ACTIVE" ? (
                                            <DropdownMenuItem className={'text-destructive'}
                                                onClick={() =>
                                                    handleStatusChange(
                                                        user.id,
                                                        "BANNED"
                                                    )
                                                }
                                            >
                                                Banned User
                                            </DropdownMenuItem>
                                        ) : (
                                            <DropdownMenuItem
                                            className={"text-primary"}
                                                onClick={() =>
                                                    handleStatusChange(
                                                        user.id,
                                                        "ACTIVE"
                                                    )
                                                }
                                            >
                                                Activate User
                                            </DropdownMenuItem>
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}