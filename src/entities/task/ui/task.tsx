import { classNames } from '6.shared/lib/classNames/classNames'
import classes from './task.module.scss'

interface TaskProps {
  className?: string
}

export function Task({className}: TaskProps) {
  return (
    <div className={classNames(classes.task, {}, [className])}>
      <></>
    </div>
  )
}