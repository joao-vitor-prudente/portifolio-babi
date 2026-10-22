import type { PropsWithChildren } from "react";

export function HoverCard(props: PropsWithChildren) {
  return (
    <div className="group relative">
      {props.children}
      <div className="pointer-events-none invisible fixed inset-0 z-10 bg-black opacity-0 group-hover:opacity-50 transform duration-300 group-hover:visible" />
    </div>
  );
}

export function HoverCardTrigger(props: PropsWithChildren) {
  return <div>{props.children}</div>;
}

export function HoverCardContent(props: PropsWithChildren) {
  return (
    <div className="pointer-events-none invisible absolute top-0 z-20 rounded-md bg-olive-200 group-hover:visible opacity-0 group-hover:opacity-100 transform duration-300">
      {props.children}
    </div>
  );
}
