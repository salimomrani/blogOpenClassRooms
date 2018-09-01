import {Component} from '@angular/core';
import {Post} from 'src/app/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[] = [ {
    title: 'Mon premier post', content: '\n' +
      '  Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Commodi dicta dolor dolore eligendi minus natus quo rem repellendus,' +
      ' tempora velit. Atque delectus dignissimos dolore iure iusto,' +
      ' non omnis quaerat quo! ', created_at: new Date(), loveIts: 0
  },
    {
      title: 'Mon deuxième post', content: '\n' +
        '  Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Commodi dicta dolor dolore eligendi minus natus quo rem repellendus,' +
        ' tempora velit. Atque delectus dignissimos dolore iure iusto,' +
        ' non omnis quaerat quo! ', created_at: new Date(), loveIts: 0
    },
    {
      title: 'Encore un post', content: '\n' +
        '  Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Commodi dicta dolor dolore eligendi minus natus quo rem repellendus,' +
        ' tempora velit. Atque delectus dignissimos dolore iure iusto,' +
        ' non omnis quaerat quo! ', created_at: new Date(), loveIts: 0
    }
  ];
}
