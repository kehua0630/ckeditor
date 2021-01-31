import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  ngOnInit() {}

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
