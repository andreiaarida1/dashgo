import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import React, { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()
    
    let isActive = false;

    if (asPath == rest.href || asPath == rest.as) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'pink.50' 
            })}
        </Link>
    )
}