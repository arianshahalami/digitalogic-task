import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

import styles from "./card.module.scss";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Card = ({
   children,
   className,
   ...props
}: PropsWithChildren<Props>) => {
   return (
      <div className={[styles["card"], className].join(" ")} {...props}>
         <div className={styles["card-body"]}>{children}</div>
      </div>
   );
};
