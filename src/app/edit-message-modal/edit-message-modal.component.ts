import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-edit-message-modal',
  templateUrl: './edit-message-modal.component.html',
  styleUrls: ['./edit-message-modal.component.scss'],
})
export class EditMessageModalComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private modalService: NzModalService) {}

  openModal() {
    this.modalService.create({
      nzTitle: 'modal',
      nzContent: ModalComponent,
      nzWidth: '880px',
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {},
      nzOnOk: () => {},
    });
  }
}
