import type { DBQuestion } from "@/app/lib/types/dbTypes";
import { DnDList } from "../UI/DnDList/DnDList";
import { Dispatch, SetStateAction } from "react";
import QuestionListItem from "./QuestionListItem";

const QuestionList: React.FC<{
  questions: DBQuestion[];
  setQuestions: Dispatch<SetStateAction<DBQuestion[] | undefined>>;
}> = (props) => {
  let orderedQuestions = props.questions;
  orderedQuestions.sort((a, b) => a.order_in_quiz - b.order_in_quiz);
  return (
    <div className="max-width-screen-xl min-w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
      {orderedQuestions && (
        <DnDList
          items={props.questions}
          onChange={props.setQuestions}
          renderItem={(item) => (
            <DnDList.Item id={item.id}>
              <QuestionListItem question={item} />
              <DnDList.DragHandle />
            </DnDList.Item>
          )}
        />
      )}
    </div>
  );
};

export default QuestionList;
