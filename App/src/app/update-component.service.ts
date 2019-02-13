import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DirectoryInfo } from './directory-info';
import { DataService } from './data.service';
import { CustomPath } from './directory-info';

@Injectable({
  providedIn: 'root'
})

export class UpdateComponentService {

  lstDirectories: DirectoryInfo[];
  updateComponent = new BehaviorSubject<string>("name");
  cast = this.updateComponent.asObservable();

  constructor(private data: DataService) {
    this.getDirectory();
  }


  getDirectory() {
    this.data.getDirectory().subscribe(
      data => {
        this.updateComponent.next(data);
    });
  }

  callDirectory(customPath: CustomPath) {
    // post
    this.data.insertDirectory(customPath).subscribe(
      data => {
        this.updateComponent.next(data);
      }
    );

    this.refresh();
  }

  refresh() {
    // get
  console.log("refresh called");
    this.data.getDirectory().subscribe(
      data => {
        this.updateComponent.next(data);
      console.log(this.updateComponent.value);
    }
    );
  }
}
