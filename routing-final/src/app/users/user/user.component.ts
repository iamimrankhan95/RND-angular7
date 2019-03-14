import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params // subscribe works with observable, its when aysnc need, if any task needs to be /may will be done in future but you dont know exaclty how much time it will take then use observable,subcribtion.
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }
// observable dosent get distroyed when component is distroyed when component is changed. but angular distroys the observables behind. we can also do it manually.
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
