import { CreateTaskButton } from "@/features/task";
import { UiCetnerContentLayout } from "@/shared/ui/layouts/ui-center-content-layout";

interface TasksPageProps {

}

export function TasksPage() {
  const body = (
    <>
      <div className="flex gap-2 mt-10">
        <CreateTaskButton />
      </div>
      {/* <BoardsList className="mt-10" /> */}
    </>
  );

  return (
      <UiCetnerContentLayout className="py-10">
        <h1 className="text-3xl ">Задачи</h1>
        {body}
      </UiCetnerContentLayout>
  )
}