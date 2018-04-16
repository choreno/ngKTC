import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';



import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';


interface Item {
  test: string;
  content: string;
}

interface ItemId extends Item {
  id: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app';

  itemCollection: AngularFirestoreCollection<Item>;
  // items: Observable<Item[]>;
  items: any;

  itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  test: string;
  content: string;

  constructor(private db: AngularFirestore) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

    // this.items = db.collection('/members').valueChanges();

    this.itemCollection = this.db.collection('items', ref => ref.where('test', '<=', 'cuestro'));

    // this.items = this.itemCollection.valueChanges();
    this.items = this.itemCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Item;
          const id = a.payload.doc.id;

          // console.log(a);
          return { id, data };
        });
      });
  }

  addItem() {
    // this.db.collection('items').add({ 'test': this.test, 'content': this.content });
    this.db.collection('items').doc('CHO Changburm').set({ 'test': this.test, 'content': this.content });
  }

  getItem(itemId) {

    this.itemDoc = this.db.doc('items/' + itemId);
    this.item = this.itemDoc.valueChanges();
  }

  deleteItem(itemId) {
    this.db.doc('items/' + itemId).delete();
  }

}
