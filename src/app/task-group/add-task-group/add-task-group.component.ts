import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-add-task-group',
  templateUrl: './add-task-group.component.html',
  styleUrls: ['./add-task-group.component.scss']
})
export class AddTaskGroupComponent implements OnInit {
  faPlus = faPlus;
  createForm;
  addTaskGroupActive = true;
  editTaskGroupNameActive = false;
  @Output() onAddClicked = new EventEmitter<Column>();
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit() {

  }

  onClickAddTaskGroup(): void {
    this.addTaskGroupActive = false;
    this.editTaskGroupNameActive = true;
  }

  onSubmit(customerData: any): void {
    if (customerData.name.trim() === '') {
      this.addTaskGroupActive = true;
      this.editTaskGroupNameActive = false;
    } else {
      this.editTaskGroupNameActive = false;
      const newColumn = new Column(customerData.name, ['']);
      console.log(newColumn);
      this.onAddClicked.emit(newColumn);
    }
  }
}
