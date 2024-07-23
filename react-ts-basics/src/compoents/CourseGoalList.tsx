import { ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet!. Please add some goal!
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" serverity="medium">
        You have a lot of course goals yet!. Please don't add musch goal!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal?.id}
              title={goal?.title}
              onDelete={onDeleteGoal}
              // description="Learn it from the ground up"
            >
              {/* Childre in CourseGoal!! */}
              <p>{goal?.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
