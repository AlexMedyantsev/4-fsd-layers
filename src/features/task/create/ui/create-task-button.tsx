import { UiButton } from "@/shared/ui/ui-button"
import clsx from "clsx"
import { useState } from "react";
import { CreateTaskModal } from "./create-task-modal";

interface CreateTaskButtonProps {
  className?: string
}

export function CreateTaskButton({ className}: CreateTaskButtonProps ) {
  const [open, setOpen] = useState(false);
  
  return (
   <>
    <UiButton
      variant="primary"
      className={clsx(className)}
      onClick={() => setOpen(true)}
    >
      Новая Задача
    </UiButton>
    {open && <CreateTaskModal onClose={() => setOpen(false)} />}
  </>
  )
}