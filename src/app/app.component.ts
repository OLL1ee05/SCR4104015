import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialogSCR4104015/dialog.component';
import { ApiService } from './service/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OJTProjectAngular';
  displayedColumnsSCR4104015: string[] = ['action', 'id', 'endorseInvnoFld', 'endorseCovFld', 'endorseCovDescFld', 'endorseCovAmtFld', 'endorseEndorseCovAmtFld', 'endorseNetCovAmtFld', 'endorsePremRateFld', 'endorsePremAmtFld', 'endorseEndorsePremAmtFld', 'endorseNetPremAmtFld', 'endorseCommRateFld', 'endorseCommFld', 'endorseEndorseCommFld', 'endorseNetCommFld', 'endorseRemFld'];
  datasourceSCR4104015!: MatTableDataSource<any>;

  constructor(private dialog : MatDialog, private api : ApiService){

  }
  ngOnInit(): void {
    this.getAllListSCR4104015();
  }

  openDialogSCR4104015() {
    this.dialog.open(DialogComponent, {
      width: '100%',
    });
  }
  getAllListSCR4104015(){
    this.api.getaddSCR4104015()
    .subscribe({
      next:(res)=>{
        this.datasourceSCR4104015 = new MatTableDataSource(res);
      },
      error:(err)=>{
        alert("Error while fetching the records")
      }
    })
  }
  editItemSCR4104015(row : any){
    this.dialog.open(DialogComponent,{
      width:'100%',
      data : row,
    }).afterClosed().subscribe(val=>{
      if(val == 'UPDATE'){
        this.getAllListSCR4104015();
        alert("List Succesfully");
      }
    });
  }

  deleteListSCR4104015(id:number){
    this.api.deleteDataSCR4104015(id)

    .subscribe({
      next:(res)=>{
        alert("List Deleted Succesfully");
        this.getAllListSCR4104015();
      },
      error:()=>{
        alert("Error while Deleting the List");
      }
    });
  }
}