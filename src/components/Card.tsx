import * as React from 'react';
import {ComponentPropsWithRef} from "react";
import {css} from "@emotion/react";
import {Link} from "gatsby";

interface CardProps extends ComponentPropsWithRef<"article"> {
    title: string
    src: string
    to: string
}

const card = css`
  img {
    object-fit: cover;
    width: 100%;
  }
`

export const Card = ({title, src, to, ...props}: CardProps) => {
    return (
        <Link to={to}>
            <article css={card} {...props}>
                <img src={src} alt=""/>
                <p>{title}</p>
            </article>
        </Link>
    )
}