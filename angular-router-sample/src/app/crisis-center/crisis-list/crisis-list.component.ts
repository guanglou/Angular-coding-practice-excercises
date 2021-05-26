import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from '../../message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {


  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.heroes$ = this.service.getHeroes();

    console.log('crisisList Compo 333...');
    console.log('this.route: ' + this.route);

    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        console.log('selectedId: ' + this.selectedId);
        console.log('foo: ' + params.get('foo'));
        return this.service.getCrises();
      })
    );

  }

  showOverview(): void {
    this.router.navigate(['overview'], {relativeTo: this.route});

  }

  showContact(): void {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

  // showCrisis(id: number | string): void {
  //   this.router.navigate([id], {relativeTo: this.route});
  // }

}
