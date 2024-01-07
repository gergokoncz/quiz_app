import React, { createContext, useContext, useMemo } from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import type {
  DraggableSyntheticListeners,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: UniqueIdentifier;
}

interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const DnDItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() {},
});

export function DnDItem({ children, id }: PropsWithChildren<Props>) {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const context = useMemo(
    () => ({ attributes, listeners, ref: setActivatorNodeRef }),
    [attributes, listeners, setActivatorNodeRef]
  );

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <DnDItemContext.Provider value={context}>
      <li
        className="flex justify-between flex-grow items-center p-4 bg-white shadow-md rounded-md list-none text-gray-700 font-normal text-base mx-4"
        ref={setNodeRef}
        style={style}
      >
        {children}
      </li>
    </DnDItemContext.Provider>
  );
}

export function DragHandle() {
  const { attributes, listeners, ref } = useContext(DnDItemContext);

  return (
    <button
      className="flex w-12 p-3 items-center justify-center flex-0 flex-grow-0 auto select-none cursor-pointer rounded border-none outline-none bg-transparent tap-transparent focus-visible:ring-2 focus-visible:ring-blue-500"
      {...attributes}
      {...listeners}
      ref={ref}
    >
      <svg viewBox="0 0 20 20" width="12">
        <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
      </svg>
    </button>
  );
}
