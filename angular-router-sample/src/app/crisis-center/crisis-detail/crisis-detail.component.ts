import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map} from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  // @Input() hero: Hero;
  crisis: Crisis;

  // crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit(): void {

    this.route.data.subscribe( (data: { crisis: Crisis}) => {
        console.log('data.crisis');
        console.log(data.crisis);
        this.crisis = data.crisis;
    } );

    // this.crisis$ = this.route.paramMap.pipe(
    //   switchMap( (params: ParamMap) =>
    //     this.service.getCrisis(params.get('id')) )
    // );

    // const id = this.route.snapshot.paramMap.get('id');
    // this.crisis$ = this.service.getCrisis(id);
    // console.log('CrisisDetailComponent id is: ' + id)
  }

  gotoCrises(crisis: Crisis): void {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo-person' }]);
  }



}
