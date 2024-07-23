import { type PropsWithChildren, type ReactNode } from "react";

//or use interface CourseGoalProps ={ ....}
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode
// }

//or
// type CourseGoalProps = {
//   title: string;
//   //   description: string;
//   //use children type as ReactNode with p tag
//   children: ReactNode;
// };

//or use below generic type
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        {
          //original description props
          /* <p>{description}</p> */
        }
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
