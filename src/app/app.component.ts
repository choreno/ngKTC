import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    //this.items = db.collection('/members').valueChanges();
    this.items = db.collection('/items').valueChanges();
  }

}
