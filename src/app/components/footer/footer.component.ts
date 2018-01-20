import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mediaLinks = [
    {
      iconSRC: '../../assets/Icons/iconmonstr-facebook.svg',
      href: '//www.facebook.com/TomUluk'
    },
    {
      iconSRC: '../../assets/Icons/iconmonstr-instagram.svg',
      href: '//www.instagram.com/tomuluk/'
    },
    {
      iconSRC: '../../assets/Icons/iconmonstr-linkedin.svg',
      href: '//www.linkedin.com/in/toms-uluks-182460110/'
    },
    {
      iconSRC: '../../assets/Icons/iconmonstr-twitter.svg',
      href: '//twitter.com/Tin_Tommy'
    }
  ]
}
