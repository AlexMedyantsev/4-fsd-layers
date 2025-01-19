import { useCreateBoard } from "@/features/board/create/model/use-create-board";
import { UiModal } from "@/shared/ui/ui-modal";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Controller, useForm } from "react-hook-form";

interface CreateTaskButtonProps {
  onClose: () => void
}

export function CreateTaskModal({ onClose }: CreateTaskButtonProps ) {
  const { control, handleSubmit } = useForm<CreateTaskData>({
    defaultValues: {
      title: "",
    }
  })

  const { createBoard } = useCreateBoard();

  const onSubmit = handleSubmit((data) => createBoard(data, onClose))
  
  return (
   <UiModal isOpen onClose={onClose} width="md">
    <form onSubmit={onSubmit}>
      <UiModal.Header>
        <h1>Создание Задачи</h1>
      </UiModal.Header>
      <UiModal.Body className="flex flex-col gap-4">
        <Controller
          control={control}
          name="name"
          rules={{ required: "Название задачи - обязательное поле" }}
          render={({ field, fieldState }) => (
            <UiTextField
              label="Название Задачи"
              inputProps={{ ...field }}
              error={fieldState.error?.message}
            />
          )}
        />
      </UiModal.Body>
    </form>
   </UiModal>
  )
}