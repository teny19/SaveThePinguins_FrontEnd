import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  btnActive = false;
  percentage = 30;

  constructor(public toastController: ToastController) {}

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You have done a great job!',
      position: 'bottom',
      duration: 2000,
      color: 'dark'
    });
    toast.present();

    this.btnActive = true;
    this.percentage = 40;
  }

}
