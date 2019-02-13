import { Component, OnInit } from '@angular/core';
import { DirectoryInfo } from '../directory-info';
import { DataService } from '../data.service';
import { UpdateComponentService } from '../update-component.service';
import { CustomPath } from '../directory-info';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  listingDirectories: string;

  constructor(private updateComponent: UpdateComponentService) { }

  ngOnInit() {

    this.updateComponent.cast.subscribe(listingDirectories => this.listingDirectories = listingDirectories);
  }
}
