import { useState } from "react";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";

const ReorderableList = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reOrderedItems = Array.from(items);
    const [removed] = reOrderedItems.splice(result.source.index, 1);
    reOrderedItems.splice(result.destination.index, 0, removed);
    setItems(reOrderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <p>{item.content}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
