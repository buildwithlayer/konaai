import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initLayerBuilder } from '@buildwithlayer/builder';
import { initLayerChat } from '@buildwithlayer/chat';
import { initLayerCore } from '@buildwithlayer/core';

initLayerBuilder();
initLayerChat();
initLayerCore();

layerBuilder.mount();
layerChat.mount();
layerCore.mount({
  copilot: 'RAG',
  systemMessage:
    'Please be precise in your answers. If your answer requires bullet points, please also be short and to the point.',
  layerApiKey: '1751882d-8b24-4b2f-9171-59185ff99f19',

  // Do not include this in production code
  layerCustomerApiKey: 'a449df88-2603-4c48-9731-1e6912dc7643',
});
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kona-demo';
  filters = {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    layerCore.actions.registerCallback('setFilter', (args) => {
      console.log('SETTING FILTER', args);
      this.filters = Object.assign({}, args);
      this.cdr.detectChanges();
      return 'success';
    });
  }

  ngOnDestroy() {
    layerCore.actions.unregisterCallback('setFilter');
  }
}
