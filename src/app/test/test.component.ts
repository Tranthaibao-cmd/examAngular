import { Type } from '@angular/compiler';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CdkDragDrop, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {
  cells = [
    { value: 'Value 1', data: null },
    { value: 'Value 2', data: null },
    { value: 'Value 3', data: null },
    // Thêm các ô trống khác vào đây
  ];
  
  onDrop(event:  CdkDragEnd<any>) {
    // ...
  }
  
  drop(event: CdkDragDrop<any,any>) {
    // ...
  }
  
  dragEnded(event: CdkDragDrop<any>) {
    const draggedValue = event.item.element.nativeElement.textContent;
    const targetIndex = event.container.data.indexOf(null!);
    this.cells[targetIndex].data !== null ? draggedValue : null;

  }

  ngOnInit() {
 

  }


}
