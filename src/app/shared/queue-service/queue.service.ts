import {Inject, Injectable} from '@angular/core';
import {environment} from '@environment';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class QueueService {
  lightQueue = undefined;
  private readonly window: WindowProxy;
  private readonly scriptURL: string;
  private readonly channelId: string;
  private readonly token: string;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    this.window = this.document.defaultView;
    this.scriptURL = environment.queue.src;
    this.channelId = environment.queue.channelId;
    this.token = environment.queue.token;
  }

  // Generic script loader with callback
  addScript(filepath, callback) {
    if (filepath) {
      const fileRef: any = document.createElement('script');
      let done = false;
      const head = document.getElementsByTagName('head')[0];

      fileRef.onload = fileRef.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
          done = true;
          callback();
          // Handle memory leak in IE
          fileRef.onload = fileRef.onreadystatechange = null;
          if (head && fileRef.parentNode) {
            head.removeChild(fileRef);
          }
        }
      };

      fileRef.setAttribute('type', 'text/javascript');
      fileRef.setAttribute('src', filepath);
      head.appendChild(fileRef);
    }
  }

  // Data layer is optional set of key/value pairs
  initialization() {
    if(this.lightQueue !== undefined) {
      return ;
    }
    if (!this.scriptURL) {return}
    this.addScript(this.scriptURL, ()=> {
      this.lightQueue = new (<any>this.window).LightQueueClass(this.channelId, this.token, false, '', '/');
      this.lightQueue.initialization();
      this.lightQueue.subscribe('initialization', (data)=> {
        console.log('Feedback: ', data)
      });
      this.lightQueue.subscribe('url_matched', (data)=> {
        console.log('Feedback: ', data)
      });
      this.lightQueue.subscribe('queue_init', (data)=> {
        console.log('Feedback: ', data)
      });
      this.lightQueue.subscribe('queue_processing', (data)=> {
        console.log('Feedback: ', data)
      });
      this.lightQueue.subscribe('queue_released', (data)=> {
        console.log('Feedback: ', data);
      });
      this.lightQueue.subscribe('queue_complete', (data)=> {
        console.log('Feedback: ', data)
      });
      this.lightQueue.subscribe('queue_close', (data)=> {
        console.log('Feedback: ', data)
        this.lightQueue = undefined;
      });
      this.lightQueue.subscribe('queue_error', (data)=> {
        console.log('Feedback: ', data)
      });
    })
  }

  // When you want to check your trigger rules
  async validateRules() {
    return this.lightQueue.validateRules();
  }

  // * Call after placed a Order *//
  completeCheckout(payload) {
    if(this.lightQueue !== undefined){
      this.lightQueue.completeCheckout({
        custom_metadata: payload
      });
    } else {
      console.log('Please initialize your Queue before calling this method!')
    }
  }
}
