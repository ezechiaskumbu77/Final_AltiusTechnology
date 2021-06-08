import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { 
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CareerService } from './service/career.service'; 
@Component({
  selector: 'dialog-candidature',
  templateUrl: './dialog-candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class DialogCandidatureComponent implements OnInit {
  // name: FormControl= new FormControl(true, Validators.required);

   
  careerForm!: FormGroup;  
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  
  showloading=false; 
  showsuccess =false;
  showfaillure=false;
  errorMsg: any;

  constructor(public modal: NgbActiveModal, private careerService: CareerService , private _cdr: ChangeDetectorRef ) { }
  // @ViewChild("CvFile", {static: false}) CvFile: ElementRef;
  // files  = [];
  ngOnInit() {

    this.careerForm  = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Lastname : new FormControl('', Validators.required),
      Subject: new FormControl('', Validators.required), 
      CvFile: new FormControl('', Validators.required),
    })
      
  }

  /*onClick() {  
    const CvFile = this.CvFile.nativeElement;CvFile.onchange = () => {  
    for (let index = 0; index < CvFile.files.length; index++)  
    {  
     const file = CvFile.files[index];  
    //  this.files.push({ data: file, inProgress: false, progress: 0});  
    }  
      this.uploadFiles();  
    };  
    CvFile.click();  
}

private uploadFiles() {  
  this.CvFile.nativeElement.value = '';  
  this.files.forEach(file => {  
    this.uploadFile(file);  
  });  
}*/
/*
uploadFile(file) {  
  const formData = new FormData();  
  formData.append('file', file.data);  
  file.inProgress = true;  
  this.careerService.upload(formData).pipe(  
    map(event => {  
      switch (event.type) {  
        case HttpEventType.UploadProgress:  
          file.progress = Math.round(event.loaded * 100 / event.total);  
          break;  
        case HttpEventType.Response:  
          return event;  
      }  
    }),  
    catchError((error: HttpErrorResponse) => {  
      file.inProgress = false;  
      return of(`${file.data.name} upload failed.`);  
    })).subscribe((event: any) => {  
      if (typeof (event) === 'object') {  
        console.log(event.body);  
      }  
    });  
}*/

upload(): void {
  this.progress = 0;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.showloading=true;
      this.currentFile = file;
      // console.log('start applying ... ', this.careerForm!.value); 
      // f.value
      this.careerService.upload(this.currentFile).subscribe(
        (event: any) => {
          // if (event.type === HttpEventType.UploadProgress) {
          //   this.progress = Math.round(100 * event.loaded / event.total);
          // } else if (event instanceof HttpResponse) {
          //   this.message = event.body.message;
          //   // this.fileInfos = this.careerService.getFiles();
          // }
        


          // if(event.type === HttpEventType.Sent)
          // {
            console.log('careers created',event); 
            this.onSubmit() ;
            // this.showsuccess=true;
            // this.showfaillure=false;
          
          // }
          // else{
          //   this.showsuccess =false;
          //   this.showfaillure =true; 
          
          // }

          

          // setTimeout( () =>{(_u: any)=>this.modal.close()}
          //   ,2500
          // );
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
          // this.showsuccess =false;
          // this.showfaillure =true; 
         


          // this.currentFile = undefined;
        });
    }

    // this.selectedFiles = undefined;
  }
}

selectFile(event: any): void {
  this.selectedFiles = event.target.files;
}

  onSubmit( ) {

    console.log('start applying ... ', this.careerForm!.value); 
    // f.value
    this.careerService.candidature( this.careerForm!.value).subscribe({
  
      next:  res => {
      
       
 
        if(res.success == true)
        {
          this.showloading=false;
          this.showsuccess=true;
          this.showfaillure=false; 
        }
        else{
          this.showloading=false;
          this.showsuccess =false;
          this.showfaillure =true;  
        }

        console.log('careers created',res); 

        setTimeout( () =>{(_u: any)=>this.modal.close()}
          ,2500
        );
    
      },
      error: err => this.errorMsg = err
    });
 
  }

}
