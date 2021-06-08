import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogCandidatureComponent } from './candidature/dialog-candidature.component';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  showApplyCard:boolean = false;
  constructor(  private _cdr: ChangeDetectorRef, private _modalService: NgbModal ) { }

    ngOnInit() {

  }




  openCandidature(){
    this._modalService.open(DialogCandidatureComponent)
  }


  onClick = () => {
    this.showApplyCard = true;
  }
}
