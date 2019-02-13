import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomPath } from '../directory-info';
import { ListingComponent } from '../listing/listing.component';
import { UpdateComponentService } from '../update-component.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  name = new FormControl('');
  customPath = new CustomPath();

  constructor(private updateComponent: UpdateComponentService) { }

  ngOnInit() {
  }

  getDirectory() {
    if (this.customPath) {

      console.log(this.name.value);

      this.customPath.body = this.name.value;
      console.log(this.customPath.body + " from directory.component");

      this.updateComponent.callDirectory(this.customPath);

    } else {
      console.log("this.customPath is empty / null");
    }
  }
}
