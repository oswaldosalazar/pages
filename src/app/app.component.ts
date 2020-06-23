import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Colorado Mountain',
      url:
        'https://images.unsplash.com/photo-1546473375-064ee4437682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'New Mexico Landscape',
      url:
        'https://images.unsplash.com/photo-1556827739-8cdac8bc6855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    },
    {
      title: 'Wyoming Tetons',
      url:
        'https://images.unsplash.com/photo-1477425143973-7c2c58f29378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
    },
    {
      title: 'Montana Trail',
      url:
        'https://images.unsplash.com/photo-1587844060244-3b04a62b52ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
    },
    {
      title: 'Colorado Mountain',
      url:
        'https://images.unsplash.com/photo-1546473375-064ee4437682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'New Mexico Landscape',
      url:
        'https://images.unsplash.com/photo-1556827739-8cdac8bc6855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    },
    {
      title: 'Wyoming Tetons',
      url:
        'https://images.unsplash.com/photo-1477425143973-7c2c58f29378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
    },
    {
      title: 'Montana Trail',
      url:
        'https://images.unsplash.com/photo-1587844060244-3b04a62b52ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
    },
    {
      title: 'Colorado Mountain',
      url:
        'https://images.unsplash.com/photo-1546473375-064ee4437682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'New Mexico Landscape',
      url:
        'https://images.unsplash.com/photo-1556827739-8cdac8bc6855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    },
    {
      title: 'Wyoming Tetons',
      url:
        'https://images.unsplash.com/photo-1477425143973-7c2c58f29378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
    },
    {
      title: 'Montana Trail',
      url:
        'https://images.unsplash.com/photo-1587844060244-3b04a62b52ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
    },
    {
      title: 'Colorado Mountain',
      url:
        'https://images.unsplash.com/photo-1546473375-064ee4437682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'New Mexico Landscape',
      url:
        'https://images.unsplash.com/photo-1556827739-8cdac8bc6855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    },
    {
      title: 'Wyoming Tetons',
      url:
        'https://images.unsplash.com/photo-1477425143973-7c2c58f29378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
    },
    {
      title: 'Montana Trail',
      url:
        'https://images.unsplash.com/photo-1587844060244-3b04a62b52ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
    },
    {
      title: 'Colorado Mountain',
      url:
        'https://images.unsplash.com/photo-1546473375-064ee4437682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'New Mexico Landscape',
      url:
        'https://images.unsplash.com/photo-1556827739-8cdac8bc6855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    },
    {
      title: 'Wyoming Tetons',
      url:
        'https://images.unsplash.com/photo-1477425143973-7c2c58f29378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
    },
    {
      title: 'Montana Trail',
      url:
        'https://images.unsplash.com/photo-1587844060244-3b04a62b52ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
    },
    {
      title: 'Colorado Mountain',
      url:
        'https://images.unsplash.com/photo-1546473375-064ee4437682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'New Mexico Landscape',
      url:
        'https://images.unsplash.com/photo-1556827739-8cdac8bc6855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    },
    {
      title: 'Wyoming Tetons',
      url:
        'https://images.unsplash.com/photo-1477425143973-7c2c58f29378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
    },
    {
      title: 'Montana Trail',
      url:
        'https://images.unsplash.com/photo-1587844060244-3b04a62b52ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
