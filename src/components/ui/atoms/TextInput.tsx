import { type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function TextInput({
    className,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={cn('bg-transparent outline-none w-full', className)}
            />
    )
}