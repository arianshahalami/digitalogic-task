import type {
   ButtonHTMLAttributes,
   DetailedHTMLProps,
   PropsWithChildren,
} from "react";

type Props = DetailedHTMLProps<
   ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
> & {
   color: "primary" | "simple";
   rounded?: boolean;
};

import styles from "./button.module.scss";

export const Button = ({
   rounded = false,
   color = "primary",
   className,
   ...props
}: PropsWithChildren<Props>) => {
   const { children } = props;
   return (
      <button
         className={[
            styles["button"],
            styles[color],
            rounded && styles["rounded"],
            className,
         ].join(" ")}
         {...props}
      >
         {children}
      </button>
   );
};
